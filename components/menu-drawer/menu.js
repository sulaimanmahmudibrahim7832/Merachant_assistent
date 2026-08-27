

        const menuDrawer = document.getElementById("menuDrawer");


        const menuOpen = document.getElementById("menuOpen");


        const drawerClose = document.getElementById("drawerClose");


        const drawerOverlay =  document.getElementById("drawerOverlay");


        // Open drawer


        menuOpen.addEventListener("click", function () {


            menuDrawer.classList.add("open");


            drawerOverlay.classList.add("show");


        });




        // Close drawer


        drawerClose.addEventListener("click", function () {


            closeDrawer();


        });




        // Close when overlay is clicked


        drawerOverlay.addEventListener("click", function () {


            closeDrawer();


        });




        // Close drawer function


        function closeDrawer() {


            menuDrawer.classList.remove("open");


            drawerOverlay.classList.remove("show");


        }




        // Close drawer with Escape key


        document.addEventListener("keydown", function (event) {


            if (event.key === "Escape") {


                closeDrawer();


            }


        });




        // Close drawer after selecting a page on mobile


        const menuItems =
            document.querySelectorAll(".menu-item");




        menuItems.forEach(function (item) {


            item.addEventListener("click", function () {


                if (window.innerWidth < 900) {


                    closeDrawer();


                }


            });


        });




        // Example sign-out action


        const signOut =
            document.getElementById("signOut");




        signOut.addEventListener("click", function () {


            alert("Sign out action will be connected later.");


        });




























const quickMenuButton = document.getElementById("quickMenuButton");

    const quickMenuContent = document.getElementById("quickMenuContent");

    const quickSignOut =  document.getElementById("quickSignOut");


    // Open / close quick menu

    quickMenuButton.addEventListener("click", function (event) {

        event.stopPropagation();

        const isOpen =
            quickMenuContent.classList.toggle("show");

        quickMenuButton.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    // Close when clicking outside

    document.addEventListener("click", function () {

        quickMenuContent.classList.remove("show");

        quickMenuButton.setAttribute(
            "aria-expanded",
            "false"
        );

    });


    // Prevent clicks inside menu from closing it immediately

    quickMenuContent.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

        }
    );


    // Close with Escape

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                quickMenuContent.classList.remove("show");

                quickMenuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );


    // Temporary sign-out action

    quickSignOut.addEventListener(
        "click",
        function () {

            alert(
                "Sign out will be connected to authentication later."
            );

        }
    );
