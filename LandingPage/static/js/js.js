ClassicEditor.create(document.querySelector("#about_project, #blog_content"), {
    toolbar: [
      "heading",
      "|",
      "bold",
      "italic",
      "link",
      "bulletedList",
      "numberedList",
      "blockQuote"
    ],
    heading: {
      options: [
        { model: "paragraph", title: "Paragraph", class: "ck-heading_paragraph" },
        {
          model: "heading1",
          view: "h1",
          title: "Heading 1",
          class: "ck-heading_heading1"
        },
        {
          model: "heading2",
          view: "h2",
          title: "Heading 2",
          class: "ck-heading_heading2"
        }
      ]
    }
  }).catch(error => {
    console.log(error);
  });


  document.querySelector(".close").addEventListener("click", function(){
    document.querySelector(".wrapper").style.display = "none";
  });


const wrapper = document.querySelector(".wrapper")
const close = document.querySelector(".close")

window.onload = function() {
  setTimeout(function(){
    wrapper.style.display = "block"
  }), 3000
}

close.addEventListener("click", function(){
  wrapper.style.display = "none"
})

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})