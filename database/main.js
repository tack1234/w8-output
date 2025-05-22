// 1.localStorageからサインイン情報の取得
// 2.サインインボタンが押されたら、localStorageにサインイン情報を保存
// 3.保存するとき、リロードを止めるので、同じページに画面遷移させる

window.addEventListener('DOMContentLoaded', () => {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');

    if (email === true) {
        document.getElementById('email').value = email;
    }

    if (password === true) {
        document.getElementById('password').value = password;
    }
});

document.getElementById('signin-form').addEventListener('submit', (e) =>{
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    location.reload();
});

