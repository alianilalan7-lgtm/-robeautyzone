export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          extensions?: Json
          operationName?: string
          query?: string
          variables?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      accounts: {
        Row: {
          access_token: string | null
          expires_at: number | null
          id: string
          id_token: string | null
          provider: string
          providerAccountId: string
          refresh_token: string | null
          scope: string | null
          session_state: string | null
          token_type: string | null
          type: string
          userId: string
        }
        Insert: {
          access_token?: string | null
          expires_at?: number | null
          id: string
          id_token?: string | null
          provider: string
          providerAccountId: string
          refresh_token?: string | null
          scope?: string | null
          session_state?: string | null
          token_type?: string | null
          type: string
          userId: string
        }
        Update: {
          access_token?: string | null
          expires_at?: number | null
          id?: string
          id_token?: string | null
          provider?: string
          providerAccountId?: string
          refresh_token?: string | null
          scope?: string | null
          session_state?: string | null
          token_type?: string | null
          type?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "accounts_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      appointments: {
        Row: {
          adminNotes: string | null
          canceledAt: string | null
          cancelReason: string | null
          confirmationSentAt: string | null
          confirmationToken: string | null
          confirmationTokenHash: string | null
          confirmedAt: string | null
          consentAt: string | null
          createdAt: string
          customerEmail: string | null
          customerName: string
          customerPhone: string
          endAt: string
          id: string
          kvkkConsent: boolean
          serviceId: string
          staffId: string | null
          startAt: string
          status: Database["public"]["Enums"]["AppointmentStatus"]
          tokenExpiresAt: string | null
          updatedAt: string
        }
        Insert: {
          adminNotes?: string | null
          canceledAt?: string | null
          cancelReason?: string | null
          confirmationSentAt?: string | null
          confirmationToken?: string | null
          confirmationTokenHash?: string | null
          confirmedAt?: string | null
          consentAt?: string | null
          createdAt?: string
          customerEmail?: string | null
          customerName: string
          customerPhone: string
          endAt: string
          id: string
          kvkkConsent?: boolean
          serviceId: string
          staffId?: string | null
          startAt: string
          status?: Database["public"]["Enums"]["AppointmentStatus"]
          tokenExpiresAt?: string | null
          updatedAt: string
        }
        Update: {
          adminNotes?: string | null
          canceledAt?: string | null
          cancelReason?: string | null
          confirmationSentAt?: string | null
          confirmationToken?: string | null
          confirmationTokenHash?: string | null
          confirmedAt?: string | null
          consentAt?: string | null
          createdAt?: string
          customerEmail?: string | null
          customerName?: string
          customerPhone?: string
          endAt?: string
          id?: string
          kvkkConsent?: boolean
          serviceId?: string
          staffId?: string | null
          startAt?: string
          status?: Database["public"]["Enums"]["AppointmentStatus"]
          tokenExpiresAt?: string | null
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "appointments_serviceId_fkey"
            columns: ["serviceId"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_staffId_fkey"
            columns: ["staffId"]
            isOneToOne: false
            referencedRelation: "staff"
            referencedColumns: ["id"]
          },
        ]
      }
      articles: {
        Row: {
          category: string
          created_at: string
          discovered_at: string | null
          error: string | null
          fetched_at: string
          full_text: string | null
          full_text_chunks_json: Json | null
          full_text_hash: string | null
          id: string
          image_url: string | null
          language: string
          last_render_id: string | null
          metadata: Json
          normalized_title: string | null
          published_at: string | null
          source_id: string
          status: Database["public"]["Enums"]["article_status"]
          story_id: string | null
          title: string
          title_hash: string | null
          updated_at: string
          url: string
        }
        Insert: {
          category?: string
          created_at?: string
          discovered_at?: string | null
          error?: string | null
          fetched_at?: string
          full_text?: string | null
          full_text_chunks_json?: Json | null
          full_text_hash?: string | null
          id?: string
          image_url?: string | null
          language?: string
          last_render_id?: string | null
          metadata?: Json
          normalized_title?: string | null
          published_at?: string | null
          source_id: string
          status?: Database["public"]["Enums"]["article_status"]
          story_id?: string | null
          title: string
          title_hash?: string | null
          updated_at?: string
          url: string
        }
        Update: {
          category?: string
          created_at?: string
          discovered_at?: string | null
          error?: string | null
          fetched_at?: string
          full_text?: string | null
          full_text_chunks_json?: Json | null
          full_text_hash?: string | null
          id?: string
          image_url?: string | null
          language?: string
          last_render_id?: string | null
          metadata?: Json
          normalized_title?: string | null
          published_at?: string | null
          source_id?: string
          status?: Database["public"]["Enums"]["article_status"]
          story_id?: string | null
          title?: string
          title_hash?: string | null
          updated_at?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "articles_last_render_id_fkey"
            columns: ["last_render_id"]
            isOneToOne: false
            referencedRelation: "renders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "articles_source_id_fkey"
            columns: ["source_id"]
            isOneToOne: false
            referencedRelation: "sources"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "articles_story_id_fkey"
            columns: ["story_id"]
            isOneToOne: false
            referencedRelation: "stories"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_logs: {
        Row: {
          action: string
          actor: string
          createdAt: string
          entity: string
          entityId: string
          id: string
          metadata: Json | null
        }
        Insert: {
          action: string
          actor: string
          createdAt?: string
          entity: string
          entityId: string
          id: string
          metadata?: Json | null
        }
        Update: {
          action?: string
          actor?: string
          createdAt?: string
          entity?: string
          entityId?: string
          id?: string
          metadata?: Json | null
        }
        Relationships: []
      }
      bookmarks: {
        Row: {
          article_id: string
          created_at: string
          id: string
          user_id: string
        }
        Insert: {
          article_id: string
          created_at?: string
          id?: string
          user_id: string
        }
        Update: {
          article_id?: string
          created_at?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "bookmarks_article_id_fkey"
            columns: ["article_id"]
            isOneToOne: false
            referencedRelation: "articles"
            referencedColumns: ["id"]
          },
        ]
      }
      briefings: {
        Row: {
          category: string
          content: string
          created_at: string
          delivery_slot: string | null
          error_message: string | null
          expert_key: string
          id: string
          perspective: string
          sent_at: string | null
          sources: Json
          status: string
          title: string
          user_id: string
        }
        Insert: {
          category?: string
          content: string
          created_at?: string
          delivery_slot?: string | null
          error_message?: string | null
          expert_key?: string
          id?: string
          perspective?: string
          sent_at?: string | null
          sources?: Json
          status?: string
          title: string
          user_id: string
        }
        Update: {
          category?: string
          content?: string
          created_at?: string
          delivery_slot?: string | null
          error_message?: string | null
          expert_key?: string
          id?: string
          perspective?: string
          sent_at?: string | null
          sources?: Json
          status?: string
          title?: string
          user_id?: string
        }
        Relationships: []
      }
      business_hours: {
        Row: {
          closeTime: string
          createdAt: string
          dayOfWeek: Database["public"]["Enums"]["DayOfWeek"]
          id: string
          isOpen: boolean
          openTime: string
          updatedAt: string
        }
        Insert: {
          closeTime: string
          createdAt?: string
          dayOfWeek: Database["public"]["Enums"]["DayOfWeek"]
          id: string
          isOpen?: boolean
          openTime: string
          updatedAt: string
        }
        Update: {
          closeTime?: string
          createdAt?: string
          dayOfWeek?: Database["public"]["Enums"]["DayOfWeek"]
          id?: string
          isOpen?: boolean
          openTime?: string
          updatedAt?: string
        }
        Relationships: []
      }
      closures: {
        Row: {
          createdAt: string
          date: string
          id: string
          note: string | null
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          date: string
          id: string
          note?: string | null
          updatedAt: string
        }
        Update: {
          createdAt?: string
          date?: string
          id?: string
          note?: string | null
          updatedAt?: string
        }
        Relationships: []
      }
      gallery_items: {
        Row: {
          active: boolean
          caption: string | null
          createdAt: string
          id: string
          imageUrl: string
          order: number
          updatedAt: string
        }
        Insert: {
          active?: boolean
          caption?: string | null
          createdAt?: string
          id: string
          imageUrl: string
          order?: number
          updatedAt: string
        }
        Update: {
          active?: boolean
          caption?: string | null
          createdAt?: string
          id?: string
          imageUrl?: string
          order?: number
          updatedAt?: string
        }
        Relationships: []
      }
      job_logs: {
        Row: {
          created_at: string
          error: string | null
          finished_at: string | null
          id: string
          payload: Json
          result: Json | null
          started_at: string | null
          status: Database["public"]["Enums"]["job_status"]
          type: string
        }
        Insert: {
          created_at?: string
          error?: string | null
          finished_at?: string | null
          id?: string
          payload?: Json
          result?: Json | null
          started_at?: string | null
          status?: Database["public"]["Enums"]["job_status"]
          type: string
        }
        Update: {
          created_at?: string
          error?: string | null
          finished_at?: string | null
          id?: string
          payload?: Json
          result?: Json | null
          started_at?: string | null
          status?: Database["public"]["Enums"]["job_status"]
          type?: string
        }
        Relationships: []
      }
      legal_documents: {
        Row: {
          content: string
          createdAt: string
          id: string
          title: string
          type: Database["public"]["Enums"]["LegalDocumentType"]
          updatedAt: string
        }
        Insert: {
          content: string
          createdAt?: string
          id: string
          title: string
          type: Database["public"]["Enums"]["LegalDocumentType"]
          updatedAt: string
        }
        Update: {
          content?: string
          createdAt?: string
          id?: string
          title?: string
          type?: Database["public"]["Enums"]["LegalDocumentType"]
          updatedAt?: string
        }
        Relationships: []
      }
      market_prices: {
        Row: {
          id: string
          market_id: string | null
          outcome: string
          price: number
          timestamp: string | null
        }
        Insert: {
          id?: string
          market_id?: string | null
          outcome: string
          price: number
          timestamp?: string | null
        }
        Update: {
          id?: string
          market_id?: string | null
          outcome?: string
          price?: number
          timestamp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "market_prices_market_id_fkey"
            columns: ["market_id"]
            isOneToOne: false
            referencedRelation: "prediction_markets"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          article_id: string | null
          created_at: string
          id: string
          link: string | null
          message: string
          read: boolean
          title: string
          type: Database["public"]["Enums"]["notification_type"]
          user_id: string | null
        }
        Insert: {
          article_id?: string | null
          created_at?: string
          id?: string
          link?: string | null
          message: string
          read?: boolean
          title: string
          type?: Database["public"]["Enums"]["notification_type"]
          user_id?: string | null
        }
        Update: {
          article_id?: string | null
          created_at?: string
          id?: string
          link?: string | null
          message?: string
          read?: boolean
          title?: string
          type?: Database["public"]["Enums"]["notification_type"]
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "notifications_article_id_fkey"
            columns: ["article_id"]
            isOneToOne: false
            referencedRelation: "articles"
            referencedColumns: ["id"]
          },
        ]
      }
      prediction_markets: {
        Row: {
          active: boolean | null
          category: string | null
          created_at: string | null
          description: string | null
          end_date: string | null
          id: string
          image_url: string | null
          liquidity_usd: number | null
          polymarket_id: string
          slug: string
          title: string
          updated_at: string | null
          volume_usd: number | null
        }
        Insert: {
          active?: boolean | null
          category?: string | null
          created_at?: string | null
          description?: string | null
          end_date?: string | null
          id?: string
          image_url?: string | null
          liquidity_usd?: number | null
          polymarket_id: string
          slug: string
          title: string
          updated_at?: string | null
          volume_usd?: number | null
        }
        Update: {
          active?: boolean | null
          category?: string | null
          created_at?: string | null
          description?: string | null
          end_date?: string | null
          id?: string
          image_url?: string | null
          liquidity_usd?: number | null
          polymarket_id?: string
          slug?: string
          title?: string
          updated_at?: string | null
          volume_usd?: number | null
        }
        Relationships: []
      }
      renders: {
        Row: {
          article_id: string
          created_at: string
          editorial_text: string | null
          error_message: string | null
          fact_table_json: Json | null
          id: string
          model_versions: Json
          sentence_map_json: Json | null
          status: Database["public"]["Enums"]["render_status"]
          style_json: Json
          style_preset: string
          updated_at: string
          user_id: string | null
          verifier_report_json: Json | null
          verifier_verdict: Database["public"]["Enums"]["verifier_verdict"]
        }
        Insert: {
          article_id: string
          created_at?: string
          editorial_text?: string | null
          error_message?: string | null
          fact_table_json?: Json | null
          id?: string
          model_versions?: Json
          sentence_map_json?: Json | null
          status?: Database["public"]["Enums"]["render_status"]
          style_json?: Json
          style_preset?: string
          updated_at?: string
          user_id?: string | null
          verifier_report_json?: Json | null
          verifier_verdict?: Database["public"]["Enums"]["verifier_verdict"]
        }
        Update: {
          article_id?: string
          created_at?: string
          editorial_text?: string | null
          error_message?: string | null
          fact_table_json?: Json | null
          id?: string
          model_versions?: Json
          sentence_map_json?: Json | null
          status?: Database["public"]["Enums"]["render_status"]
          style_json?: Json
          style_preset?: string
          updated_at?: string
          user_id?: string | null
          verifier_report_json?: Json | null
          verifier_verdict?: Database["public"]["Enums"]["verifier_verdict"]
        }
        Relationships: [
          {
            foreignKeyName: "renders_article_id_fkey"
            columns: ["article_id"]
            isOneToOne: false
            referencedRelation: "articles"
            referencedColumns: ["id"]
          },
        ]
      }
      service_categories: {
        Row: {
          createdAt: string
          id: string
          name: string
          order: number
          slug: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          id: string
          name: string
          order?: number
          slug: string
          updatedAt: string
        }
        Update: {
          createdAt?: string
          id?: string
          name?: string
          order?: number
          slug?: string
          updatedAt?: string
        }
        Relationships: []
      }
      services: {
        Row: {
          active: boolean
          categoryId: string
          createdAt: string
          description: string
          durationMin: number
          id: string
          images: string[] | null
          name: string
          order: number
          preparationTips: string | null
          priceMax: number | null
          priceMin: number
          slug: string
          updatedAt: string
        }
        Insert: {
          active?: boolean
          categoryId: string
          createdAt?: string
          description: string
          durationMin: number
          id: string
          images?: string[] | null
          name: string
          order?: number
          preparationTips?: string | null
          priceMax?: number | null
          priceMin: number
          slug: string
          updatedAt: string
        }
        Update: {
          active?: boolean
          categoryId?: string
          createdAt?: string
          description?: string
          durationMin?: number
          id?: string
          images?: string[] | null
          name?: string
          order?: number
          preparationTips?: string | null
          priceMax?: number | null
          priceMin?: number
          slug?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "services_categoryId_fkey"
            columns: ["categoryId"]
            isOneToOne: false
            referencedRelation: "service_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      sessions: {
        Row: {
          expires: string
          id: string
          sessionToken: string
          userId: string
        }
        Insert: {
          expires: string
          id: string
          sessionToken: string
          userId: string
        }
        Update: {
          expires?: string
          id?: string
          sessionToken?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "sessions_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      sources: {
        Row: {
          adapter_type: string
          base_url: string
          category_tags: string[]
          config_json: Json
          created_at: string
          enabled: boolean
          id: string
          name: string
          rss_url: string | null
          updated_at: string
        }
        Insert: {
          adapter_type?: string
          base_url: string
          category_tags?: string[]
          config_json?: Json
          created_at?: string
          enabled?: boolean
          id?: string
          name: string
          rss_url?: string | null
          updated_at?: string
        }
        Update: {
          adapter_type?: string
          base_url?: string
          category_tags?: string[]
          config_json?: Json
          created_at?: string
          enabled?: boolean
          id?: string
          name?: string
          rss_url?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      staff: {
        Row: {
          active: boolean
          createdAt: string
          email: string | null
          id: string
          name: string
          phone: string | null
          serviceIds: string[] | null
          updatedAt: string
        }
        Insert: {
          active?: boolean
          createdAt?: string
          email?: string | null
          id: string
          name: string
          phone?: string | null
          serviceIds?: string[] | null
          updatedAt: string
        }
        Update: {
          active?: boolean
          createdAt?: string
          email?: string | null
          id?: string
          name?: string
          phone?: string | null
          serviceIds?: string[] | null
          updatedAt?: string
        }
        Relationships: []
      }
      stories: {
        Row: {
          canonical_title: string
          category: string | null
          confidence_score: number | null
          created_at: string | null
          first_published_at: string | null
          id: string
          language: string | null
          last_published_at: string | null
          slug: string | null
          top_keywords: string[] | null
          updated_at: string | null
        }
        Insert: {
          canonical_title: string
          category?: string | null
          confidence_score?: number | null
          created_at?: string | null
          first_published_at?: string | null
          id?: string
          language?: string | null
          last_published_at?: string | null
          slug?: string | null
          top_keywords?: string[] | null
          updated_at?: string | null
        }
        Update: {
          canonical_title?: string
          category?: string | null
          confidence_score?: number | null
          created_at?: string | null
          first_published_at?: string | null
          id?: string
          language?: string | null
          last_published_at?: string | null
          slug?: string | null
          top_keywords?: string[] | null
          updated_at?: string | null
        }
        Relationships: []
      }
      subscribers: {
        Row: {
          created_at: string | null
          email: string
          id: string
          last_notified_at: string | null
          preferred_categories: string[] | null
          verified: boolean | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          last_notified_at?: string | null
          preferred_categories?: string[] | null
          verified?: boolean | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          last_notified_at?: string | null
          preferred_categories?: string[] | null
          verified?: boolean | null
        }
        Relationships: []
      }
      system_settings: {
        Row: {
          key: string
          updated_at: string | null
          updated_by: string | null
          value: Json
        }
        Insert: {
          key: string
          updated_at?: string | null
          updated_by?: string | null
          value: Json
        }
        Update: {
          key?: string
          updated_at?: string | null
          updated_by?: string | null
          value?: Json
        }
        Relationships: []
      }
      translations: {
        Row: {
          created_at: string
          id: string
          source_text_hash: string
          target_language: string
          translated_text: string
        }
        Insert: {
          created_at?: string
          id?: string
          source_text_hash: string
          target_language: string
          translated_text: string
        }
        Update: {
          created_at?: string
          id?: string
          source_text_hash?: string
          target_language?: string
          translated_text?: string
        }
        Relationships: []
      }
      user_agents: {
        Row: {
          created_at: string
          delivery_time: string
          delivery_times: string[] | null
          enabled: boolean | null
          expert_key: string | null
          frequency: string | null
          id: string
          persona: string
          timezone: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          delivery_time?: string
          delivery_times?: string[] | null
          enabled?: boolean | null
          expert_key?: string | null
          frequency?: string | null
          id?: string
          persona: string
          timezone?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          delivery_time?: string
          delivery_times?: string[] | null
          enabled?: boolean | null
          expert_key?: string | null
          frequency?: string | null
          id?: string
          persona?: string
          timezone?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_interests: {
        Row: {
          category: string
          created_at: string
          id: string
          perspective: string | null
          user_id: string
        }
        Insert: {
          category: string
          created_at?: string
          id?: string
          perspective?: string | null
          user_id: string
        }
        Update: {
          category?: string
          created_at?: string
          id?: string
          perspective?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_settings: {
        Row: {
          accent_color: string | null
          auto_summary: boolean | null
          clickbait_filter: boolean | null
          created_at: string
          font_size: number | null
          summary_level: number | null
          theme_mode: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          accent_color?: string | null
          auto_summary?: boolean | null
          clickbait_filter?: boolean | null
          created_at?: string
          font_size?: number | null
          summary_level?: number | null
          theme_mode?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          accent_color?: string | null
          auto_summary?: boolean | null
          clickbait_filter?: boolean | null
          created_at?: string
          font_size?: number | null
          summary_level?: number | null
          theme_mode?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          createdAt: string
          email: string
          emailVerified: string | null
          id: string
          image: string | null
          name: string | null
          password: string | null
          role: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          email: string
          emailVerified?: string | null
          id: string
          image?: string | null
          name?: string | null
          password?: string | null
          role?: string
          updatedAt: string
        }
        Update: {
          createdAt?: string
          email?: string
          emailVerified?: string | null
          id?: string
          image?: string | null
          name?: string | null
          password?: string | null
          role?: string
          updatedAt?: string
        }
        Relationships: []
      }
      verification_tokens: {
        Row: {
          expires: string
          identifier: string
          token: string
        }
        Insert: {
          expires: string
          identifier: string
          token: string
        }
        Update: {
          expires?: string
          identifier?: string
          token?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      AppointmentStatus:
        | "DRAFT"
        | "PENDING_CONFIRMATION"
        | "CONFIRMED"
        | "CANCELED"
        | "NO_RESPONSE"
        | "COMPLETED"
      article_status: "DISCOVERED" | "FETCHED" | "FAILED"
      DayOfWeek:
        | "MONDAY"
        | "TUESDAY"
        | "WEDNESDAY"
        | "THURSDAY"
        | "FRIDAY"
        | "SATURDAY"
        | "SUNDAY"
      job_status: "pending" | "running" | "completed" | "failed"
      LegalDocumentType: "KVKK" | "CONSENT" | "PRIVACY"
      notification_type: "breaking" | "topic" | "system" | "social"
      render_status:
        | "pending"
        | "extracting"
        | "rendering"
        | "verifying"
        | "completed"
        | "failed"
      render_style_preset:
        | "FACT_ONLY"
        | "SIMPLE_EXPLAIN"
        | "ANALYTIC"
        | "TLDR_PLUS_DETAILS"
        | "LIGHT_HUMOR"
      user_role: "user" | "admin"
      verifier_verdict: "pending" | "pass" | "fail" | "fact_only"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {
      AppointmentStatus: [
        "DRAFT",
        "PENDING_CONFIRMATION",
        "CONFIRMED",
        "CANCELED",
        "NO_RESPONSE",
        "COMPLETED",
      ],
      article_status: ["DISCOVERED", "FETCHED", "FAILED"],
      DayOfWeek: [
        "MONDAY",
        "TUESDAY",
        "WEDNESDAY",
        "THURSDAY",
        "FRIDAY",
        "SATURDAY",
        "SUNDAY",
      ],
      job_status: ["pending", "running", "completed", "failed"],
      LegalDocumentType: ["KVKK", "CONSENT", "PRIVACY"],
      notification_type: ["breaking", "topic", "system", "social"],
      render_status: [
        "pending",
        "extracting",
        "rendering",
        "verifying",
        "completed",
        "failed",
      ],
      render_style_preset: [
        "FACT_ONLY",
        "SIMPLE_EXPLAIN",
        "ANALYTIC",
        "TLDR_PLUS_DETAILS",
        "LIGHT_HUMOR",
      ],
      user_role: ["user", "admin"],
      verifier_verdict: ["pending", "pass", "fail", "fact_only"],
    },
  },
} as const
