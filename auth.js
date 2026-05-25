
function checkRole(requiredRole, redirectPage) {
  auth.onAuthStateChanged(async (user) => {
    if (!user) {
      window.location.href = redirectPage;
      return;
    }

    const snapshot = await db.ref('users/' + user.uid).once('value');

    if (!snapshot.exists()) {
      auth.signOut();
      window.location.href = redirectPage;
      return;
    }

    const data = snapshot.val();

    if (data.role !== requiredRole) {
      alert('Akses ditolak');
      auth.signOut();
      window.location.href = redirectPage;
    }
  });
}

function logoutUser(page){
  auth.signOut().then(()=>{
    window.location.href = page;
  });
}
