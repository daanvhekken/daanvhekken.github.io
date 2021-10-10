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

    var field = "position";
    var query = ref.orderBy(field);
    query.get().then(docsSnap => {
        getData(docsSnap.docs);
    });

    function getData(docs) {
        docs.forEach((doc) => {
            const data = doc.data();

            let column = document.createElement("div");
            column.classList.add("col");
            column.classList.add("col-md-4");

            let card = document.createElement("div");
            card.classList.add("card");
            column.append(card);

                let cardHeader = document.createElement("div");
                cardHeader.classList.add("card-header");
                cardHeader.classList.add("gradient-background");
                cardHeader.innerHTML = "Blog post";
                card.append(cardHeader);

                let cardBody = document.createElement("div");
                cardBody.classList.add("card-body");
                card.append(cardBody);

                    let cardTitle = document.createElement("h5");
                    cardTitle.classList.add("card-title");
                    cardTitle.innerHTML = data.title;
                    cardBody.append(cardTitle);

                    let cardText = document.createElement("p");
                    cardText.classList.add("card-text");
                    cardText.innerHTML = data.content;
                    cardBody.append(cardText);

                    if(data.showBtn) {
                        let cardButton = document.createElement("a");
                        cardButton.classList.add("button");
                        cardButton.innerHTML = data.button_text;
                        cardButton.onclick = function () {
                            openBlogPopup(data.title, data.content_full);
                        };
                        cardBody.append(cardButton);
                    }
                    

                let cardFooter = document.createElement("div");
                cardFooter.classList.add("card-footer");
                cardFooter.classList.add("text-white");
                cardFooter.classList.add("border-top");
                cardFooter.classList.add("border-white");
                cardFooter.innerHTML = data.read_time;
                card.append(cardFooter);

            $("#blogstest").append( column);

        });
    }

    function openBlogPopup(title, content) {
        // Script for opening modals
        // Get the modal
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
        modal.style.zIndex = "4";

        var modalTitle = document.getElementById("modalTitle");
        modalTitle.innerHTML = title;
        var modalContent = document.getElementById("modalContent");
        modalContent.innerHTML = content;

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks the button, open the modal 
        

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
        modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        }
    }