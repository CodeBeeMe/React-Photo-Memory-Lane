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

//Title
class Title extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { openGallery, restorePictures } = this.props;

    return (
      <div id="title" className="row justify-content-center">
        <div className="col- icons albums">
          <i class="fas fa-images" />
        </div>
        <div className="col- name">
          <h1 onClick={openGallery}>Photo Memory Lane</h1>
        </div>
        <div className="col- icons restore">
          <i class="fas fa-window-restore" onClick={restorePictures} />
        </div>
      </div>
    );
  }
}

const Footer = () => {
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

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.photoAlbum = [
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
        { id: "10", url: "" },
        { id: "11", url: "" },
        { id: "12", url: "" },
        { id: "13", url: "" },
        { id: "14", url: "" },
        { id: "15", url: "" },
        { id: "16", url: "" },
        { id: "17", url: "" },
        { id: "18", url: "" },
        { id: "19", url: "" },
        { id: "20", url: "" },
        { id: "21", url: "" },
        { id: "22", url: "" },
        { id: "23", url: "" },
        { id: "24", url: "" },
        { id: "25", url: "" },
        { id: "26", url: "" },
        { id: "27", url: "" },
        { id: "28", url: "" },
        { id: "29", url: "" },
        { id: "30", url: "" }
      ],
      [{ title: "" }]
    ];

    this.state = {
      pictures: this.photoAlbum
    };

    this.setPhotoAlbumOne = this.setPhotoAlbumOne.bind(this);
    this.restorePictures = this.restorePictures.bind(this);
    this.openPicture = this.openPicture.bind(this);
    this.openGallery = this.openGallery.bind(this);    
    
  }

  setPhotoAlbumOne() {}

  openGallery() {
    let uiGallery = $("#photo-gallery"),
        uiThumbLinks = $("#thumbs li"),
        uiTitleH1 = $("#title h1"),
        uiFooter = $("#footer"),
        uiTitle = $("#title"),
        uiIcons = $(".icons");
    
    uiIcons.show();

    uiTitle
      .removeClass("justify-content-center")
      .addClass("justify-content-between")
      .css("margin-top", "0px")
      .css("padding", "10px")
      .css("border", "3px solid #111")
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
    let uiThumbLinks = $("#thumbs li");
    
    uiThumbLinks.click(function() {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");
    });
    //console.log(key);
    //console.log(this.playKeys[key]);
  }
  
  restorePictures() {
    let uiThumbLinks = $("#thumbs li"),
        uiRestore = $(".restore");
    
    uiRestore.click(function() {
      uiThumbLinks.siblings().removeClass("active");
    });
    
  }

  componentDidMount() {
    window.focus();
    this.restorePictures();
    this.openPicture();
  }

  render() {
    //Logs
    //console.log(this.state.pads);

    const { pictures } = this.state;

    const snaps = pictures[0].map(el => (
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

    const presetTitle = pictures[1][0].title;

    return (
      <div id="wrapper">
        <Title
          openGallery={this.openGallery}
          restorePictures={this.restorePictures}
          />
        <div id="photo-gallery">
          <div className="thumbs-box">
            <ul id="thumbs" className="text-center">
              {snaps}
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Gallery />, document.getElementById("content"));
