import React from "react";
import { Container } from '@chakra-ui/react';
import FileSaver from "file-saver";

class VCardFileCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImage: props.profileImage,
      name: props.name,
      title: props.title,
      company: props.company,
      position: props.position,
      birthday: props.birthday,
      homePhone: props.homePhone,
      officePhone: props.officePhone,
      personalPhone: props.personalPhone,
      officeFax: props.officeFax,
      altPhone: props.altPhone,
      workEmail: props.workEmail,
      personalEmail: props.personalEmail,
      website1: props.website1,
      website2: props.website2,
      paymentLink: props.paymentLink,
      homeAddress: props.homeAddress,
      officeAddress: props.officeAddress,
      homePostalCode: props.homePostalCode,
      officePostalCode: props.officePostalCode,
      homeCountry: props.homeCountry,
      homeState: props.homeState,
      homeCity: props.homeCity,
      officeCountry: props.officeCountry,
      officeState: props.officeState,
      officeCity: props.officeCity,
      theme: props.theme
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    var file = new Blob(
      [
        `BEGIN:VCARD
VERSION:3.0
N:${this.state.name};;;
FN:${this.state.name}
TITLE:${this.state.title};
EMAIL;type=INTERNET;type=pref:${this.state.personalEmail ?? this.state.workEmail}
TEL;type=MAIN:${this.state.homePhone ?? this.state.officePhone ?? this.state.personalPhone ?? this.state.altPhone}
TEL;type=CELL;type=VOICE;type=pref:${this.state.personalPhone}
ADR;type=WORK;type=pref:;;;${this.state.homeAddress ?? this.state.officeAddress};;;
END:VCARD
`,
      ],
      { type: "text/vcard;charset=utf-8" }
    );
    let a = document.createElement("a");
    a.download = `${this.state.name}.vcf`;
    a.href = URL.createObjectURL(file);
    var reader = new FileReader();
    console.log('navigator.userAgent >>> ', navigator.userAgent);
    if (navigator.userAgent.match("CriOS")) {
      reader.onloadend = (e) => {
        window.open(reader.result);
      };
      reader.readAsDataURL(file);
    } else if (navigator.userAgent.match(/iPad|iPhone|Android|Mac OS/i)) {
      reader.onload = (e) => {
        window.location.href = reader.result;
      };
      reader.readAsDataURL(file);
    } else {
      FileSaver.saveAs(
        file,
        `${this.state.name}.vcf`,
        true
      );
    }
  }

  render() {
    return (
      <Container>
        <a href="#" onClick={this.handleClick} className={this.props.className}>
          {this.state.name}
        </a>
      </Container>
    );
  }
}

export default VCardFileCreator;
