import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "gumbee.1031@gmail.com",
    pass: "lucs gwcb tgrc svqz",
  },
});

const mailoptions = {
  from: "feedd523@gmail.com",
  to: "gumbee.1031@gmail.com",
  subject: "nodemailer test",
  html: `<h1> sain yvaarai </h1>`,
  attachments: [
    {
      filename: "butterfly.png",
      path: "/Users/23LP7177/Downloads/butterfly.png",
      cid: "unique@cid",
    },
  ],
};
transporter.sendMail(mailoptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("email send:" + info.response);
  }
});
