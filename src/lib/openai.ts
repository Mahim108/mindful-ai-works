import { supabase } from './supabase';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export async function sendChatMessage(messages: ChatMessage[]): Promise<string> {
  try {
    // Call the edge function that handles OpenAI API
    const { data, error } = await supabase.functions.invoke('chat-completion', {
      body: { messages }
    });

    if (error) {
      console.error('Error calling chat completion:', error);
      return 'Sorry, I encountered an error. Please try again.';
    }

    return data.response || 'No response received.';
  } catch (error) {
    console.error('Error in sendChatMessage:', error);
    return 'Sorry, I encountered an error. Please try again.';
  }
}