var navbar = ` 
<nav class="navbar">
  <div class="navbar__container">
    <a href="index.html" id="logo"
      ><img src="../../volunteer/images/logo/logo.png"
    /></a>
  </div>

  <ul class="navbar__menu">
    <li class="navbar__item">
      <a href="../index.html" class="navbar__links">Home</a>
    </li>
    <li class="navbar__item">
      <a href="../about.html" class="navbar__links">About</a>
    </li>
    <li class="navbar__item">
      <a href="../members.html" class="navbar__links">Members</a>
    </li>
  </ul>
</nav>
`;

var footer = ` 
<div class="container-footer">
        <div class="container-top">
            <div class="container-top-info" id="info1">
                <h3>Land Acknowledgement</h3>
                <p>Project H.E.L.L.O. acknowledges the unceded Traditional Coast Salish Lands including the
                    Squamish, Musqueam, Tsleil-Waututh, Katzie, and Kwikwetlem Nations.</p>
            </div>
            <div class="container-top-info" id="info2">
                <h3>Contacts Us</h3>
                <p>Contact us through <a href="mailto:PH.project.hello@gmail.com"> email </a>at projecthello@gmail.com
                    </p>
            </div>
            <div class="container-top-info" id="info3"><h3>Participating Schools</h1>
                    <p>Currently only Dr. Charles Best Secondary School and Thomas Haney Secondary run Project
                        H.E.L.L.O.</p></div>
            
        </div>
        <div class="container-bottom">
            <div class="bottom-left">
                Project H.E.L.L.O. 2022
            </div>
            <div class="bottom-right">
                <div class="social-media" id="facebook">
                    <a href="https://www.facebook.com/pages/category/Community/Project-HELLO-125954690828073/" target="_blank">
                        <img src="../../volunteer/images/social/facebook.jpg">
                    </a>
                </div>
                <div class="social-media" id="instagram">
                    <a href="https://www.instagram.com/projecthello_/?hl=en" target="_blank">
                        <img src="../../volunteer/images/social/instagram.jpg">
                    </a>
                </div>
  
                <div class="social-media" id="email">
                    <a href="mailto:PH.project.hello@gmail.com">
                        <img src="../../volunteer/images/social/email.jpg">
                    </a>
                </div>
            </div>
        </div>
    </div>
    `;
// inserting navbar in beginning of body
document.body.insertAdjacentHTML("afterbegin", navbar);
document.body.insertAdjacentHTML("beforeend", footer);
