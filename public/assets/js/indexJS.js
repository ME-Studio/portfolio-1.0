//HOMPAGE
	// DROPDOWN ON HOVER
  $('.ui.dropdown').dropdown({
    on: "hover"
  });
  
  
  //PROJECT PAGE
    //MAKING BREADCRUMB FIXED
  $(document).ready(function() {
            $('#fixedBread').visibility({
              type: 'fixed'
            });
  });
  
  
    //SMOOTH SCROLLING TO TOP PAGE
  
  $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
  
    
      //PROJECT DETAILS
  var readMore = {
    project1:
     { title: 'Yelp Camp',
       image: '/assets/picture/Yelpcamp-desc.png',
       description: '<div class="ui header">Yelp look alike for campgrounds and camping sites.</div> It was built to give the users a friendly and less complex envirnoment. A user can post his own campgrounds in the website after authentication or search for a campground to take a break from busy life. A campground can be rated and commented by the users who visited it. Campgrounds will be verified on user\'s request. <br /><strong>Come let\'s go camping.</strong>',
       link: 'https://me-web-studio-yelpcamp.onrender.com/' },
    project2:
     { title: 'Health Vectors B2C Web App',
       image: '/assets/picture/Healthvectorsb2cwebapp-desc.png',
       description: '<div class="ui header">A modern SPA built with Angular 6.</div> The webapp contains a complete purchase flow with a checkout page and payment gateway. It is also a complete PWA with service workers configured to work on various devices including kiosks. <br /><strong>Get your smart report.</strong>',
       link: 'https://retail.healthvectors.ai/smart-health-report' },
    project3:
     { title: 'Blop',
       image: '/assets/picture/Blop-desc.png',
       description: '<div class="ui header">Blop - The blog</div> Blop is the least complex blog site you can ever experience. Blop comes with all the tools to create a elegant blog. It doesn\'t provide any unnecessary situation to confuse the users. <br /><strong>Blop - The most elegant blog!</strong>',
       link: 'https://me-web-studio-bloptheblog.onrender.com/blogs' },
    project4:
     { title: 'RGB Color Game',
       image: '/assets/picture/RgbColorGame-desc.png',
       description: '<div class="ui header">Memory genre game</div> This simple but powerful game was created when I faced difficulty in understanding and identifying the RGB. RGB Color Game helps the users to identify the color they\'re dealing with. It has various difficulties to master the RGB system. <br /><strong>Let the game start!</strong>  ',
       link: '' },
    project5:
     { title: 'Patatap Clone',
       image: '/assets/picture/Patatap-desc.jpg',
       description: '<div class="ui header">Let\'s say its an indian version of Patatap </div> Creating a fussion version of Patatap was the ultimate aim, involving indian arts as the vectors. All these are planned to be done using powerful frameworks like paper and howler JS. <br /><strong>Hold on! Site is not hosted yet.</strong>',
       link: '' },
    project6:
     { title: 'Global Accounts Manager',
       image: '/assets/picture/Photo-Coll.jpg',
       description: '<div class="ui header">Rerum ipsa perferendis quia illum cumque eum.</div> Qui ut dolores inventore nam dolorum vel saepe laudantium ullam. Qui quo sed voluptatem. Minus repudiandae expedita dolorem modi. Necessitatibus deleniti facere dolorem et. Error qui omnis veniam. Recusandae et perferendis eos repellendus quaerat ipsam iste. Nulla doloribus iusto at tenetur et sint consequatur ipsum. Veritatis architecto ut voluptatem fugit consequatur. Et et ut vitae beatae aspernatur dicta dolores. Quos aut voluptas ullam. Provident velit autem officiis ut earum rem at veniam.  Eligendi non adipisci ad id amet.',
       link: '/' },
    project7:
     { title: 'Dynamic Quality Orchestrator',
       image: '/assets/picture/Photo-Coll.jpg',
       description: '<div class="ui header">Aspernatur ipsum assumenda saepe iste.</div> Quaerat tenetur ipsa officia molestiae. Unde atque voluptate sit. Doloribus doloremque ad accusantium eius rerum fugiat ex a et. Ut et iste consequatur. Omnis adipisci at in. Consequuntur cupiditate est. Possimus iste animi. Similique labore eum et aliquid sit nulla nihil repudiandae. Alias ipsum id libero vel labore eos itaque aliquid voluptatem. Occaecati iure natus eos. Vel fugit omnis consequatur et. Illo velit sit eos distinctio enim eos.',
       link: '/projects' },
    project8:
     { title: 'Forward Integration Officer',
       image: '/assets/picture/Photo-Coll.jpg',
       description: '<div class="ui header">Quidem occaecati et ut delectus itaque quo.</div> Accusantium eligendi quidem. Vero sint suscipit sint perferendis et voluptatibus repellendus. Qui rerum error blanditiis nemo qui. A voluptatem ut id et quae est et nostrum. Ab cum blanditiis velit rem et et facilis laboriosam corporis. Voluptatum molestiae tenetur quia ratione ab et rem. Molestiae ut laborum nostrum. Voluptatem commodi officiis a et nobis officia esse expedita. Voluptatum sit sed et fugiat placeat natus ratione omnis ipsum. Est praesentium non totam fuga nisi. Voluptate numquam eum dolorem aut et quae quis aut est. Culpa cupiditate aut. Asperiores sint saepe voluptatem minima quis. Expedita impedit inventore in. Ratione aut laborum asperiores fugiat rerum. Id totam voluptates dolorem.',
       link: '/' }
  };
  
  
    //UPDATING READ MORE 
  $("#project1").on("click", function(){
    $("#readMoreTitle").text(readMore.project1.title);
    $("#readMoreImage").attr("src", readMore.project1.image);
    $("#readMoreDes").html(readMore.project1.description);
    $("#readMoreLink").attr("href", readMore.project1.link);
    $("#readMoreLink").removeClass('disabled');
  
    $('.ui.modal').modal('show').transition('flash');
  });
  $("#project2").on("click", function(){
    $("#readMoreTitle").text(readMore.project2.title);
    $("#readMoreImage").attr("src", readMore.project2.image);
    $("#readMoreDes").html(readMore.project2.description);
    $("#readMoreLink").attr("href", readMore.project2.link);
    $("#readMoreLink").removeClass('disabled');
  
    $('.ui.modal').modal('show').transition('flash');
  });
  $("#project3").on("click", function(){
    $("#readMoreTitle").text(readMore.project3.title);
    $("#readMoreImage").attr("src", readMore.project3.image);
    $("#readMoreDes").html(readMore.project3.description);
    $("#readMoreLink").attr("href", readMore.project3.link);
    $("#readMoreLink").removeClass('disabled');
  
    $('.ui.modal').modal('show').transition('flash');
  });
  $("#project4").on("click", function(){
    $("#readMoreTitle").text(readMore.project4.title);
    $("#readMoreImage").attr("src", readMore.project4.image);
    $("#readMoreDes").html(readMore.project4.description);
    $("#readMoreLink").attr("href", readMore.project4.link);
    $("#readMoreLink").addClass('disabled');
  
    $('.ui.modal').modal('show').transition('flash');
  });
  $("#project5").on("click", function(){
    $("#readMoreTitle").text(readMore.project5.title);
    $("#readMoreImage").attr("src", readMore.project5.image);
    $("#readMoreDes").html(readMore.project5.description);
    $("#readMoreLink").attr("href", readMore.project5.link);
  
    $('.ui.modal').modal('show').transition('flash');
  });
  $("#project6").on("click", function(){
    $("#readMoreTitle").text(readMore.project6.title);
    $("#readMoreImage").attr("src", readMore.project6.image);
    $("#readMoreDes").html(readMore.project6.description);
    $("#readMoreLink").attr("href", readMore.project6.link);
  
    $('.ui.modal').modal('show').transition('flash');
  });
  $("#project7").on("click", function(){
    $("#readMoreTitle").text(readMore.project7.title);
    $("#readMoreImage").attr("src", readMore.project7.image);
    $("#readMoreDes").html(readMore.project7.description);
    $("#readMoreLink").attr("href", readMore.project7.link);
  
    $('.ui.modal').modal('show').transition('flash');
  });
  $("#project8").on("click", function(){
    $("#readMoreTitle").text(readMore.project8.title);
    $("#readMoreImage").attr("src", readMore.project8.image);
    $("#readMoreDes").html(readMore.project8.description);
    $("#readMoreLink").attr("href", readMore.project8.link);
  
    $('.ui.modal').modal('show').transition('flash');
  });
  
    //CONTACT ME TODAY
  $("#contactMeToday").on("click", function(){
    $('.ui.basic.modal').modal('show').transition('flash');
  });
  
  
  //FADE IN & FADE OUT (SCROLLMAGIC)
  var controller = new ScrollMagic.Controller();
  
  const anime1 = $("#fade1")
  const scene1 = new ScrollMagic.Scene({triggerElement: '#trigger1', duration: 200})
                                    .on('enter', function(){
                                      anime1.css("transition", "opacity 0.8s")
                                      anime1.css("opacity", 1.9);
                                    })
                                    .on('leave', function(){
                                      anime1.css("transition", "opacity 2s")
                                       anime1.css("opacity", 0);
                                    })
                                    .addTo(controller);
  
  const anime2 = $("#fade2")
  const scene2 = new ScrollMagic.Scene({triggerElement: '#trigger2', duration: 200})
                                    .on('enter', function(){
                                      anime2.css("transition", "opacity 0.8s")
                                      anime2.css("opacity", 1.9);
                                    })
                                    .on('leave', function(){
                                      anime2.css("transition", "opacity 2s")
                                       anime2.css("opacity", 0);
                                    })
                                    .addTo(controller);
  
  const anime3 = $("#fade3")
  const scene3 = new ScrollMagic.Scene({triggerElement: '#trigger3', duration: 500})
                                    .on('enter', function(){
                                      anime3.css("transition", "opacity 0.8s")
                                      anime3.css("opacity", 1.9);
                                    })
                                    .on('leave', function(){
                                      anime3.css("transition", "opacity 2s")
                                       anime3.css("opacity", 0);
                                    })
                                    .addTo(controller);
  
  const anime4 = $("#fade4")
  const scene4 = new ScrollMagic.Scene({triggerElement: '#trigger4', duration: 465})
                                    .on('enter', function(){
                                      anime4.css("transition", "opacity 0.8s")
                                      anime4.css("opacity", 1.9);
                                    })
                                    .on('leave', function(){
                                      anime4.css("transition", "opacity 2s")
                                       anime4.css("opacity", 0);
                                    })
                                    .addTo(controller);
  
  const anime5 = $("#fade5")
  const scene5 = new ScrollMagic.Scene({triggerElement: '#trigger5', duration: 435})
                                    .on('enter', function(){
                                      anime5.css("transition", "opacity 0.8s")
                                      anime5.css("opacity", 1.9);
                                    })
                                    .on('leave', function(){
                                      anime5.css("transition", "opacity 2s")
                                       anime5.css("opacity", 0);
                                    })
                                    .addTo(controller);
  
  const anime6 = $("#fade6")
  const scene6 = new ScrollMagic.Scene({triggerElement: '#trigger6', duration: 220})
                                    .on('enter', function(){
                                      anime6.css("transition", "opacity 0.8s")
                                      anime6.css("opacity", 1.9);
                                    })
                                    .on('leave', function(){
                                    anime6.css("transition", "opacity 2s")
                                    anime6.css("opacity", 0);
                                    })
                                    .addTo(controller);
  
  const anime7 = $("#fade7")
  const scene7 = new ScrollMagic.Scene({triggerElement: '#trigger7', duration: 200})
                                    .on('enter', function(){
                                      anime7.css("transition", "opacity 0.8s")
                                      anime7.css("opacity", 1.9);
                                    })
                                    .on('leave', function(){
                                      anime7.css("transition", "opacity 2s")
                                      anime7.css("opacity", 0);
                                    })
                                    .addTo(controller);  
  
  const anime8 = $("#fade8")
  const scene8 = new ScrollMagic.Scene({triggerElement: '#trigger8', duration: 200})
                                    .on('enter', function(){
                                      anime8.css("transition", "opacity 0.8s")
                                      anime8.css("opacity", 1.9);
                                    })
                                    .on('leave', function(){
                                      anime8.css("transition", "opacity 2s")
                                      anime8.css("opacity", 0);
                                    })
                                    .addTo(controller);
  
  const anime9 = $("#fade9")
  const scene9 = new ScrollMagic.Scene({triggerElement: '#trigger9', duration: 300})
                                    .on('enter', function(){
                                      anime9.css("transition", "opacity 0.8s")
                                      anime9.css("opacity", 1.9);
                                    })
                                    .on('leave', function(){
                                      anime9.css("transition", "opacity 2s")
                                      anime9.css("opacity", 0);
                                    })
                                    .addTo(controller);
  
  const anime10 = $("#fade10")
  const scene10 = new ScrollMagic.Scene({triggerElement: '#trigger10', duration: 200})
                                    .on('enter', function(){
                                      anime10.css("transition", "opacity 0.8s")
                                      anime10.css("opacity", 1.9);
                                    })
                                    .on('leave', function(){
                                      anime10.css("transition", "opacity 2s")
                                      anime10.css("opacity", 0);
                                    })
                                    .addTo(controller);
  