import {createClient} from '@supabase/supabase-js'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://vlbegpizawhfbxerbeyu.supabase.co/'
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsYmVncGl6YXdoZmJ4ZXJiZXl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI2Mjk3ODIsImV4cCI6MjAzODIwNTc4Mn0.GwzcD7wk88SycjEIaDNqmqxjaFDb8kq6-xHluwA38eE'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)