const renderprompt = ({
    badge,
    contribute,
    bio,
    linkedin,
    github,
    contents,
    git,
    email,
  }) => {
    return `<!DOCTYPE html>
      <html lang="en">
        <head>
          <!-- Required meta tags -->
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <!-- Bootstrap CSS -->
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
            integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
            crossorigin="anonymous"
          />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
          integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">
          <title>Portfolio</title>
        </head>
        <body>
          <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand">Portfolio</a>
          </nav>
          <div id="aboutme" class="container" style="margin-top: 100px">
              <div class="row">
                <div class="col">
                  <h1>My Contact Information</h1>
                  <hr />
                </div>
              </div>
              <div class="row">
                <div class="col-lg-8">
                  <h3>${username}</h3>
                  <br />
                  <h3>${location}</h3>
                  <br />
                  <h3>${bio}</h3>
                  <br />
                  <a
                    href="${github}"
                    id="contents"
                    style="font-size: xx-large"
                    >GitHub <i
                    class="fab fa-github"></i> </a
                  >
                  <br />
                  <a
                    href="${linkedin}"
                    id="contents"
                    style="font-size: xx-large"
                    >Linked<i
                    class="fab fa-linkedin"></i></a
                  >
                </div>
              </div>
            </div>
          <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
          <script
            src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
            integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
            crossorigin="anonymous"
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
            crossorigin="anonymous"
          ></script>
        </body>
      </html>
      `;
  };
  module.exports = renderprompt;