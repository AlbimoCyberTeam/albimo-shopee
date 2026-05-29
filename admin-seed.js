
// AUTO ADMIN ACCOUNT
const AUTO_ADMIN_EMAIL = "admin@gmail.com";
const AUTO_ADMIN_PASSWORD = "admin123";

async function createDefaultAdmin(){
    try{
        const methods = await auth.fetchSignInMethodsForEmail(AUTO_ADMIN_EMAIL);

        if(methods.length === 0){
            const result = await auth.createUserWithEmailAndPassword(
                AUTO_ADMIN_EMAIL,
                AUTO_ADMIN_PASSWORD
            );

            await db.ref('users/' + result.user.uid).set({
                email: AUTO_ADMIN_EMAIL,
                role: 'admin',
                createdAt: Date.now()
            });

            console.log('Admin default berhasil dibuat');
        } else {
            console.log('Admin sudah tersedia');
        }
    }catch(err){
        console.log(err.message);
    }
}

createDefaultAdmin();
