import { CosmosClient } from "@azure/cosmos";
import { DEFAULT_REACTIONS, IncrementType, Reactions } from "@/src/models";
import { ErrorResponse, PostMetaDataHandler, PostReactionResponse } from ".";

export class CosmosPostMetaDataHandler implements PostMetaDataHandler {
  private _cosmosClient;
  private _container;

  constructor() {
    this._cosmosClient = new CosmosClient({
      endpoint: process.env.COSMOS_ENDPOINT!,
      key: process.env.COSMOS_KEY!,
    });
    this._container = this._cosmosClient
      .database("blog_db")
      .container("post_metadata");
  }

  async increment(
    slug: string,
    incType: IncrementType
  ): Promise<ErrorResponse> {
    const { resource, requestCharge } = await this._container.scripts
      .storedProcedure("increment")
      .execute(slug, [slug, `${incType}`]);

    return {
      error: resource ? null : "Failed to increment views",
    };
  }

  async getReactions(slug: string): Promise<PostReactionResponse> {
    const { resource: reactions, requestCharge } = await this._container
      .item(slug, slug)
      .read<Reactions>();

    return {
      reactions: reactions || null,
      error: reactions ? null : "Failed to get reactions",
    };
  }
}
