import { PostMetaDataHandler, PostReactionResponse, ErrorResponse } from ".";
import { createClient } from "@supabase/supabase-js";
import { DEFAULT_REACTIONS, IncrementType, Reactions } from "@/src/models";
import { Database } from "../models/supabase";

export class SupabasePostMetaDataHandler implements PostMetaDataHandler {
  private _supabase;
  constructor() {
    this._supabase = createClient<Database>(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_ANON_KEY!
    );
  }

  async increment(
    slug_text: string,
    incType: IncrementType
  ): Promise<ErrorResponse> {
    let { error } = await this._supabase.rpc("increment", {
      inctype: incType,
      slug_text,
    });

    return {
      error: error,
    };
  }

  async getReactions(slug: string): Promise<PostReactionResponse> {
    let { data: reactions, error } = await this._supabase
      .from("post_metadata")
      .select("*")
      .match({ slug })
      .single();

    if (error) {
      return { error, reactions: DEFAULT_REACTIONS };
    }

    if (reactions === null)
      return {
        error: "No metadata found. Use 0",
        reactions: DEFAULT_REACTIONS,
      };

    return { reactions, error: null };
  }
}
