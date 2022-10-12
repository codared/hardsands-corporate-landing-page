import vCardsJS from "vcards-js";

const generateVCard = (data: any, res?: any) => {
  // create a new vCard
  const vCard = vCardsJS();

  const [firstName, lastName, ...middleName] = data.name
    .split(" ")
    .map((name: string) => name.charAt(0).toUpperCase() + name.slice(1));

  // set properties
  vCard.firstName = firstName;
  vCard.middleName = !!middleName ? middleName : "";
  vCard.lastName = lastName;
  vCard.organization = data.company;

  vCard.photo.attachFromUrl(data.profileImage || "", "JPEG");

  vCard.workPhone = data.officePhone;
  vCard.birthday = new Date(data.birthday);
  vCard.title = data.title;
  vCard.url = data.website1;
  vCard.workUrl = data.website2;
  vCard.note = data.position;

  //set other phone numbers
  vCard.homePhone = data.personalPhone;
  vCard.cellPhone = data.altPhone;
  vCard.pagerPhone = data.officeFax;

  //set fax/facsimile numbers
  vCard.homeFax = "";
  vCard.workFax = data.officeFax;

  //set email addresses
  vCard.email = data.personalEmail;
  vCard.workEmail = data.workEmail;

  //set address information
  vCard.homeAddress.label = "Home Address";
  vCard.homeAddress.street = data.homeAddress;
  vCard.homeAddress.city = data.homeCity;
  vCard.homeAddress.stateProvince = data.homeState;
  vCard.homeAddress.postalCode = data.homePostalCode;
  vCard.homeAddress.countryRegion = data.homeCountry;

  vCard.workAddress.label = "Work Address";
  vCard.workAddress.street = data.officeAddress;
  vCard.workAddress.city = data.officeCity;
  vCard.workAddress.stateProvince = data.officeState;
  vCard.workAddress.postalCode = data.officePostalCode;
  vCard.workAddress.countryRegion = data.officeCountry;

  //set content-type and disposition including desired filename
  res.setHeader(
    "Content-Type",
    `text/vcard; name="${firstName}_${lastName}.vcf"`
  );
  res.setHeader(
    "Content-Disposition",
    `inline; filename="${firstName}_${lastName}.vcf"`
  );

  //send the response
  res.write(vCard.getFormattedString(), "binary");
  res.end();
};

export default generateVCard;
