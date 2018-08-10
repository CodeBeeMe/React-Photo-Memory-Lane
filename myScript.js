/* !Date:30.07.2018 Copyright ©2018 JavaScript code by Cătălin Anghel-Ursu @Madness2aMaze (https://codepen.io/Madness2aMaze)
- All Rights Reserved!

MIT License

Copyright (c) 2018 Cătălin Anghel-Ursu (https://github.com/Madness2aMaze/Photo-Memory-Lane)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */

class Intro extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { startIntro } = this.props;
    //console.log(AlbumTitle);
    return (
      <div id="intro" className="">        
        <div id="heart" className="">
          <i class="far fa-heart" onClick={startIntro}></i>
        </div>
      </div>
    );
  }
}

//Title
class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { pictures, openGallery, realignPictures, browseAlbums } = this.props;

    const AlbumTitle = pictures[1][0].title;

    //console.log(AlbumTitle);

    return (
      <div id="title" className="row justify-content-center enter">
        <div id="browse" className="col- icons">
          <i
            class="fas fa-images"
            onClick={browseAlbums}
            title="Browse Albums"
            />
          <span>/{AlbumTitle}</span>
        </div>
        <div id="name" className="col- ">
          <h1 onClick={openGallery}>Photo Memory Lane</h1>
        </div>
        <div id="realign" className="col- icons">
          <i
            class="fas fa-align-justify"
            onClick={realignPictures}
            title="Realign Grid"
            />
        </div>
      </div>
    );
  }
}

const FOOTER = () => {
  return (
    <div id="footer" className="fixed-bottom text-center">
      <h6>
        Designed and coded by{" "}
        <a
          href="https://github.com/Madness2aMaze"
          target="_blank"
          id="footbar"
          title="©2018 Cătălin Anghel-Ursu @Madness2aMaze - All Rights Reserved"
          >
          @Madness2aMaze ©2018 - All Rights Reserved
        </a>{" "}
        |{" "}
        <a
          href="http://codepen.io/Madness2aMaze/"
          title="More of my works"
          target="_blank"
          >
          <i className="fab fa-codepen" />
        </a>{" "}
        |{" "}
        <a
          href="https://www.freecodecamp.com/"
          target="_blank"
          title="FreeCodeCamp"
          >
          <i className="fab fa-free-code-camp" />
        </a>
      </h6>
    </div>
  );
};

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { setPhotoAlbum01, setPhotoAlbum02, setPhotoAlbum03 } = this.props;

    return (
      <div id="albums" class="">
        <nav id="navbar" className="">
          <header>
            <div className="row justify-content-center">
              <div className="col-">
                <h1>
                  <i class="far fa-images" />Photo
                </h1>
              </div>
              <div className="col-">
                <h5>Albums</h5>
              </div>
            </div>
          </header>
          <ol id="section-nav" className="nav-list text-center">
            <li id="Beginning" className="active">
              <a
                className="nav-link"
                href="#Beginning"
                onClick={setPhotoAlbum01}
                >
                Beginning
              </a>
            </li>
            <li id="Wedding">
              <a className="nav-link" href="#Wedding" onClick={setPhotoAlbum02}>
                Wedding
              </a>
            </li>
            <li id="Travels">
              <a className="nav-link" href="#Travels" onClick={setPhotoAlbum03}>
                Travels
              </a>
            </li>
          </ol>
        </nav>
      </div>
    );
  }
}

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.photoAlbum01 = [
      [
        {
          id: "0",
          url: "https://cdn.stocksnap.io/img-thumbs/960w/5L779L4CGY.jpg"
        },
        {
          id: "1",
          url: "https://cdn.stocksnap.io/img-thumbs/960w/JJ57YFN1VR.jpg"
        },
        {
          id: "2",
          url: "https://cdn.stocksnap.io/img-thumbs/960w/GWD8A8XGIL.jpg"
        },
        {
          id: "3",
          url: "https://cdn.stocksnap.io/img-thumbs/960w/PKBMXSLOHW.jpg"
        },
        {
          id: "4",
          url: "https://cdn.stocksnap.io/img-thumbs/960w/6RCSDTOPRO.jpg"
        },
        {
          id: "5",
          url: "https://cdn.stocksnap.io/img-thumbs/960w/BYBKABHWKH.jpg"
        },
        {
          id: "6",
          url: "https://cdn.stocksnap.io/img-thumbs/960w/PYOCOWAIG2.jpg"
        },
        {
          id: "7",
          url: "https://cdn.stocksnap.io/img-thumbs/960w/P2I7AM76KU.jpg"
        },
        {
          id: "8",
          url: "https://cdn.stocksnap.io/img-thumbs/960w/QU7KW07CMU.jpg"
        },
        {
          id: "9",
          url: "https://cdn.stocksnap.io/img-thumbs/960w/YHYTODADM0.jpg"
        },
        { id: "10", url: "" }
      ],
      [{ title: "Beginning" }]
    ];

    this.photoAlbum02 = [
      [
        {
          id: "0",
          url: "https://cdn.stocksnap.io/img-thumbs/960w/FUFZOMY015.jpg"
        },
        {
          id: "1",
          url: "https://cdn.stocksnap.io/img-thumbs/960w/PN5JN0TAIU.jpg"
        },
        {
          id: "2",
          url: "https://cdn.stocksnap.io/img-thumbs/960w/LCBYOH4U9K.jpg"
        },
        {
          id: "3",
          url: "https://cdn.stocksnap.io/img-thumbs/960w/8ZSF5XPSEW.jpg"
        },
        {
          id: "4",
          url: "https://cdn.stocksnap.io/img-thumbs/960w/N7FUTW0RY5.jpg"
        },
        {
          id: "5",
          url: "https://cdn.stocksnap.io/img-thumbs/960w/VSC3718R56.jpg"
        },
        {
          id: "6",
          url: "https://cdn.stocksnap.io/img-thumbs/960w/D62F810162.jpg"
        },
        {
          id: "7",
          url: "https://cdn.stocksnap.io/img-thumbs/960w/C637BA80AA.jpg"
        },
        {
          id: "8",
          url: "https://cdn.stocksnap.io/img-thumbs/960w/CA7B4D0A9A.jpg"
        },
        {
          id: "9",
          url: "https://cdn.stocksnap.io/img-thumbs/960w/ZTXOFYBPSL.jpg"
        },
        { id: "10", url: "" }
      ],
      [{ title: "Wedding" }]
    ];

    this.photoAlbum03 = [
      [
        { id: "0", url: "" },
        { id: "1", url: "" },
        { id: "2", url: "" },
        { id: "3", url: "" },
        { id: "4", url: "" },
        { id: "5", url: "" },
        { id: "6", url: "" },
        { id: "7", url: "" },
        { id: "8", url: "" },
        { id: "9", url: "" },
        { id: "10", url: "" }
      ],
      [{ title: "Travels" }]
    ];

    this.state = {
      pictures: this.photoAlbum01,
      active: false
    };

    this.realignPictures = this.realignPictures.bind(this);
    this.setPhotoAlbum01 = this.setPhotoAlbum01.bind(this);
    this.setPhotoAlbum02 = this.setPhotoAlbum02.bind(this);
    this.setPhotoAlbum03 = this.setPhotoAlbum03.bind(this);    
    this.browseAlbums = this.browseAlbums.bind(this);
    this.openPicture = this.openPicture.bind(this);
    this.openGallery = this.openGallery.bind(this);
    this.startIntro = this.startIntro.bind(this);
  }
  
  
  startIntro() {
    let uiHeart = $("#heart"),
        uiIntro = $("#intro");
    
    uiHeart
      .addClass("heart-animation");
    setTimeout(() => {
      uiIntro.hide();
      this.openGallery()
    }, 1900);
  }

  setPhotoAlbum01() {
    this.setState({
      pictures: this.photoAlbum01
    });
    this.realignPictures();
  }

  setPhotoAlbum02() {
    this.setState({
      pictures: this.photoAlbum02
    });
    this.realignPictures();
  }

  setPhotoAlbum03() {
    this.setState({
      pictures: this.photoAlbum03
    });
    this.realignPictures();
  }

  browseAlbums() {
    let uiAlbums = $("#albums"),
        uiBrowse = $("#browse");

    if (this.state.active === false) {
      uiBrowse.addClass("open");
      uiAlbums.show();
      uiAlbums.removeClass("albums-animation-out");
      uiAlbums.addClass("albums-animation-in");
      this.setState({
        active: true
      });
    } else {
      this.setState({
        active: false
      });
      uiBrowse.removeClass("open");
      uiAlbums.removeClass("albums-animation-in");
      uiAlbums.addClass("albums-animation-out");
      setTimeout(() => {
        uiAlbums.hide();
      }, 500);
    }
  }

  openGallery() {
    let uiGallery = $("#photo-gallery"),
        uiThumbLinks = $("#thumbs li"),
        uiTitleH1 = $("#title h1"),
        uiFooter = $("#footer"),
        uiTitle = $("#title"),        
        uiIcons = $(".icons"),
        uiIntro = $("#intro");
    
    uiIcons.show();
    uiTitle.show();
    uiIntro.hide();

    uiTitle      
      .removeClass("enter")
      .addClass("justify-content-between")
      .css("margin-top", "0px")
      .css("padding", "12px 15px 10px 15px")
      .css("border-bottom", "3px solid #111")
      .addClass("title-grad")
      .addClass("fixed-top");
    uiTitleH1
      .addClass("title-animation")
      .css("border-width", "2px")
      .css("border-radius", "10px");
    uiGallery.show();
    uiGallery.addClass("gallery-animation");
    uiFooter.show();

    uiTitle.click(function() {
      //uiThumbLinks.siblings().removeClass("active");
    });
  }

  openPicture() {
    let uiThumbLinks = $("#thumbs li"),
        uiRealign = $("#realign");
    
    //closes the browse sidebar if it's open
    if(this.state.active === true) {
      this.browseAlbums();
    }
    
    uiThumbLinks.click(function() {
      uiRealign.addClass("open");
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");

      setTimeout(() => {
        $(this)
          .get(0)
          .scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        });
      }, 100);
    });
  }

  realignPictures() {
    let uiThumbLinks = $("#thumbs li"),
        uiRealign = $("#realign");

    uiRealign.removeClass("open");
    uiThumbLinks.siblings().removeClass("active");
  }

  componentDidMount() {
    let uiTitle = $("#title");
    
    uiTitle.hide();
    
    window.focus();
    this.openPicture();

    let uiNavLinks = $(".nav-list li");

    uiNavLinks.click(function() {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");
    });
  }

  render() {
    //Logs

    const { pictures } = this.state;
    console.log(pictures);

    const thumbs = pictures[0].map(el => (
      <li
        id={el.id}
        key={el.id}
        className="thumbnail"
        role="button"
        onClick={this.openPicture}
        >
        <img id={el.id} className="photo" src={el.url} />
      </li>
    ));

    return (
      <div id="wrapper">
        <Intro 
          startIntro={this.startIntro}
          />
        <Navbar
          pictures={this.state.pictures}
          openGallery={this.openGallery}
          realignPictures={this.realignPictures}
          browseAlbums={this.browseAlbums}
          />
        <Sidebar
          setPhotoAlbum01={this.setPhotoAlbum01}
          setPhotoAlbum02={this.setPhotoAlbum02}
          setPhotoAlbum03={this.setPhotoAlbum03}
          />
        <div id="photo-gallery">
          <div className="thumbs-box">
            <ul id="thumbs" className="text-center">
              {thumbs}
            </ul>
          </div>
        </div>
        <FOOTER />
      </div>
    );
  }
}

ReactDOM.render(<Gallery />, document.getElementById("content"));
