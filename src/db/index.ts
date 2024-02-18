import { IncrementType, Reactions } from "@/src/models";
import { SupabasePostMetaDataHandler } from "./supabase";

export interface ErrorResponse {
  error: any;
}

export interface PostReactionResponse extends ErrorResponse {
  reactions: Reactions | null;
}

export interface PostMetaDataHandler {
  increment: (slug: string, incType: IncrementType) => Promise<ErrorResponse>;
  getReactions: (slug: string) => Promise<PostReactionResponse>;
}

const postMetaDataHandler = new SupabasePostMetaDataHandler(); //new CosmosPostMetaDataHandler();

export default postMetaDataHandler;
