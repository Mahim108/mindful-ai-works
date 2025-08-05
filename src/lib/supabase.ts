import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vbnuqqoehqfviboyfdtd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZibnVxcW9laHFmdmlib3lmZHRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY5NzExNzQsImV4cCI6MjA1MjU0NzE3NH0.SZ7gYGNPHhEyFvxkkRzYNSAmI7D7MNx-F6y04kZg7q8'

export const supabase = createClient(supabaseUrl, supabaseKey)