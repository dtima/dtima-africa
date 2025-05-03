export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      testimonials: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          name: string
          quote: string
          title: string | null
          organization: string | null
          image_url: string | null
          type: string
          display_order: number
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          name: string
          quote: string
          title?: string | null
          organization?: string | null
          image_url?: string | null
          type?: string
          display_order?: number
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          name?: string
          quote?: string
          title?: string | null
          organization?: string | null
          image_url?: string | null
          type?: string
          display_order?: number
        }
      }
      partners: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          name: string
          logo_url: string
          website_url: string | null
          featured: boolean
          display_order: number
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          name: string
          logo_url: string
          website_url?: string | null
          featured?: boolean
          display_order?: number
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          name?: string
          logo_url?: string
          website_url?: string | null
          featured?: boolean
          display_order?: number
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
} 