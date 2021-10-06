// Your web app's Firebase configuration
var firebaseConfig = {
    authDomain: "portfolio-hz-326008.firebaseapp.com",
    databaseURL: "https://portfolio-hz-326008.firebaseio.com",
    projectId: "portfolio-hz-326008",
    storageBucket: "portfolio-hz-326008.appspot.com",
    messagingSenderId: "484268071465"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

    var db = firebase.firestore();
    var ref = db.collection('blog-posts');
    var list = document.getElementsByClassName('testlist');
    let div = document.createElement('div');
    div.id = "joehoe";

    list.innerHTML = div;


    ref.get().then(docsSnap => {
        getData(docsSnap.docs);
    });

    function getData(docs) {
        list.innerHTML = '';
        docs.forEach((doc) => {
            let div = document.createElement('div');
            const data = doc.data();
            console.log(data)
            div.innerHTML += `
                     <article class="blog_item">
                    <div class="blog_item_img">
                <div class="blog_details">
                    <a class="d-inline-block" href="#">
                    <h2>${data.title}</h2>
                </a>
                <p>${data.content}</p>
                <ul class="blog-info-link">
                    <li><a href="#"><i class="fa fa-user"></i>${data.button_text}</a></li>
                     <li><a href="#"><i class="fas fa-hashtag"></i>${data.read_time}</a></li>
                </ul>
                </div>
                </article>
            `
        });
    }