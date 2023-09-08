import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SupabaseUrl = 'https://mavnvirtkvhbnvtmiddk.supabase.co';
const SecretKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1hdm52aXJ0a3ZoYm52dG1pZGRrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MzUwMDYyOSwiZXhwIjoyMDA5MDc2NjI5fQ.cWFtEEnx4NWVVH3gmSDbHZ4hgi5ZJ4mZmKQkChz-e9o';

const supaBase = createClient(SupabaseUrl, SecretKey);

const PostForm =document.querySelector('.post-form');
const PostList =document.querySelector('.post-list');

// const loginForm = document.getElementById('loginForm');

PostForm.addEventListener('submit', async (event) => {
  event.preventDefault(); 

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    const { user, error } = await supaBase.auth.signIn({
      email: username, 
      password: password,
    });

    if (error) {
      console.error('Giriş hatası:', error.message);
      
    } else {
      console.log('Giriş başarılı:', user);
    }
  } catch (error) {
    // console.error('Bir hata oluştu:', error);
  }
});
