import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
// import { createClient } from "../../node_modules/@supabase/supabase-js/dist/umd/supabase";

const supabaseUrl = 'https://mavnvirtkvhbnvtmiddk.supabase.co'
const secretKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1hdm52aXJ0a3ZoYm52dG1pZGRrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MzUwMDYyOSwiZXhwIjoyMDA5MDc2NjI5fQ.cWFtEEnx4NWVVH3gmSDbHZ4hgi5ZJ4mZmKQkChz-e9o'

const supabase = createClient(supabaseUrl, secretKey)

const postForm = document.querySelector('.post-form')
const postList = document.querySelector('.post-list')

// const loginForm = document.getElementById('loginForm');

postForm.addEventListener('submit', async event => {
  event.preventDefault()

  const username = document.querySelector('#username')
  const password = document.querySelector('#password')

  try {
    // const { data, error } = await supabase.auth.signInWithPassword({
    //   email: email,
    //   password: password
    // })
    // console.log(error, data);
    const {data: {user}, error}
     = await supabase.auth.signInWithPassword({
      email: username.value,
      password: password.value
    }).then((data) => data)

     if (user) {
      console.log('Giriş başarılı:')
      console.log(user);
      window.location = '/'
     } else {
       
       console.error('Giriş hatası:', error)
     }
  } catch (error) {
    console.error('Bir hata oluştu:', error)
  }
})
