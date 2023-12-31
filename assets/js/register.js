import {
    createClient
} from 'https://esm.sh/@supabase/supabase-js@2';

const supabaseUrl = 'https://mavnvirtkvhbnvtmiddk.supabase.co';
const secretKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1hdm52aXJ0a3ZoYm52dG1pZGRrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MzUwMDYyOSwiZXhwIjoyMDA5MDc2NjI5fQ.cWFtEEnx4NWVVH3gmSDbHZ4hgi5ZJ4mZmKQkChz-e9o';

const supabase = createClient(supabaseUrl, secretKey);

const postForm = document.querySelector('.post-form');
const postList = document.querySelector('.post-lists');

const addPost = async (e) => {
    e.preventDefault();
    const postFormData = Object.fromEntries(new FormData(postForm));
    console.log(postFormData);
    

    const data = await supabase.auth.signUp({   email: postFormData.email,   password: postFormData.password, })
    if (data) {
        await fetch(`${supabaseUrl}/rest/v1/users`, {
            method: 'POST',
            body: JSON.stringify({
                email: postFormData.email,
                password: postFormData.password,
                name: postFormData.name,
                age: postFormData.age,
                image: postFormData.image.name
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${secretKey}`,
                'apikey': secretKey
            }
        })
      window.location.href = 'login.html'
    }
    // console.log(postFormData);
    // const {
    //     data,
    //     error
    // } = await supabase.auth.signUp({
    //     email: postFormData.email,
    //     password: postFormData.password,
    //     options: {
    //         data: {
    //             name: 'asdfafs',
    //             email: 'sajda@gmail.com',
    //             age: 22
    //         }
    //     }
    // })
    
    //  await supabase
    //      .storage
    //      .from('image')
    //      .upload(postFormData.image.name, postFormData.image, {
    //          cacheControl: '3600',
    //          upsert: false
    //      });


}

postForm.addEventListener('submit', addPost);