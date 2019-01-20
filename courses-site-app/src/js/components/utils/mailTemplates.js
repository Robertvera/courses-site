/*
Very long document, for an easy usage, find below the name references of the methods available:
- thanks: thanks email
- contactUs: message from contact us form

*/
const mailTemplates = {
	thanks: function (name, surname, courseName,city,date) {
        return {
            subject: `!Gracias por tu inscrpición ${name} ${surname}!`,
            html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;">
             <head> 
              <meta charset="UTF-8"> 
              <meta content="width=device-width, initial-scale=1" name="viewport"> 
              <meta content="telephone=no" name="format-detection"> 
              <title>vmb</title> 
              <!--[if (mso 16)]>
                <style type="text/css">
                a {text-decoration: none;}
                </style>
                <![endif]--> 
              <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> 
              <style type="text/css">
            @media only screen and (max-width:600px) {p, ul li, ol li, a { font-size:16px!important } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:center } h3 { font-size:20px!important; text-align:center } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c { text-align:center!important } .es-m-txt-r { text-align:right!important } .es-m-txt-l { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } .es-button { font-size:20px!important; display:block!important; border-width:10px 0px 10px 0px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } .es-desk-menu-hidden { display:table-cell!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social td { display:inline-block!important } table.es-social { display:inline-block!important } }
            #outlook a {
                padding:0;
            }
            .ExternalClass {
                width:100%;
            }
            .ExternalClass,
            .ExternalClass p,
            .ExternalClass span,
            .ExternalClass font,
            .ExternalClass td,
            .ExternalClass div {
                line-height:100%;
            }
            .es-button {
                mso-style-priority:100!important;
                text-decoration:none!important;
            }
            a[x-apple-data-detectors] {
                color:inherit!important;
                text-decoration:none!important;
                font-size:inherit!important;
                font-family:inherit!important;
                font-weight:inherit!important;
                line-height:inherit!important;
            }
            .es-desk-hidden {
                display:none;
                float:left;
                overflow:hidden;
                width:0;
                max-height:0;
                line-height:0;
                mso-hide:all;
            }
            </style> 
             </head> 
             <body style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"> 
              <div class="es-wrapper-color" style="background-color:#CCCCCC;"> 
               <!--[if gte mso 9]>
                        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                            <v:fill type="tile" color="#cccccc"></v:fill>
                        </v:background>
                    <![endif]--> 
                   <table class="es-header" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top;"> 
                     <tr style="border-collapse:collapse;"> 
                      <td class="es-adaptive" align="center" style="padding:0;Margin:0;"> 
                       <table class="es-header-body" width="600" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;"> 
                         <tr style="border-collapse:collapse;"> 
                          <td align="left" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:40px;padding-right:40px;"> 
                           <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                             <tr style="border-collapse:collapse;"> 
                              <td width="520" valign="top" align="center" style="padding:0;Margin:0;"> 
                               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                                 <tr style="border-collapse:collapse;"> 
                                  <td class="es-m-p0l" align="center" style="padding:0;Margin:0;"> <img src="https://firebasestorage.googleapis.com/v0/b/vmbformacion-3c649.appspot.com/o/image%2F30941541267017436.png?alt=media&token=05e449d5-4eae-4f9b-9320-992015e94ba1" alt="VMB logo" title="VMB logo" width="118" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;"></td> 
                                 </tr> 
                               </table> </td> 
                             </tr> 
                           </table> </td> 
                         </tr> 
                       </table> </td> 
                     </tr> 
                   </table> 
                   <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"> 
                     <tr style="border-collapse:collapse;"> 
                      <td align="center" style="padding:0;Margin:0;"> 
                       <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
                         <tr style="border-collapse:collapse;"> 
                          <td align="left" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:40px;padding-right:40px;"> 
                           <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                             <tr style="border-collapse:collapse;"> 
                              <td width="520" valign="top" align="center" style="padding:0;Margin:0;"> 
                               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                                 <tr style="border-collapse:collapse;"> 
                                  <td align="left" style="padding:0;Margin:0;"> <h1 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:30px;font-style:normal;font-weight:normal;color:#4A7EB0;">¡Inscripción confirmada!</h1> </td> 
                                 </tr> 
                                 <tr style="border-collapse:collapse;"> 
                                  <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:20px;"> 
                                   <table width="5%" height="100%" cellspacing="0" cellpadding="0" border="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                                     <tr style="border-collapse:collapse;"> 
                                      <td style="padding:0;Margin:0px;border-bottom:2px solid #999999;background:rgba(0, 0, 0, 0) none repeat scroll 0% 0%;height:1px;width:100%;margin:0px;"></td> 
                                     </tr> 
                                   </table> </td> 
                                 </tr> 
                                 <tr style="border-collapse:collapse;"> 
                                  <td align="left" style="padding:0;Margin:0;padding-bottom:10px;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:150%;color:#666666;"><span style="font-size:16px;">Hola <strong>${name} ${surname}</strong>,</span></p> </td> 
                                 </tr> 
                                 <tr style="border-collapse:collapse;"> 
                                  <td align="left" style="padding:0;Margin:0;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:150%;color:#666666;">desde <strong>VMB Formación</strong> te damos las gracias por apuntarte a <strong>${courseName}</strong>, que tendrá lugar en <strong>${city} el ${date}</strong>. 15 días antes del curso nos pondremos en contacto contigo para que no te olvides :) </p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:150%;color:#666666;"><br></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:150%;color:#666666;">Si tienes alguna pregunta,&nbsp;por favor no dudes en ponerte en contacto con nosotros. No olvides visitar nuestra página y revisar todos los cursos que hemos preparado para ti!</p> </td> 
                                 </tr> 
                                 <tr style="border-collapse:collapse;"> 
                                  <td align="center" style="padding:0;Margin:0;padding-top:20px;padding-bottom:20px;"> <span class="es-button-border" style="border-style:solid;border-color:#4A7EB0;background:#2CB543;border-width:0px;display:inline-block;border-radius:0px;width:auto;"> <a href="http://vmbformacion.com/" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none !important;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:18px;color:#4A7EB0;border-style:solid;border-color:#EFEFEF;border-width:10px 25px;display:inline-block;background:#EFEFEF;border-radius:0px;font-weight:normal;font-style:normal;line-height:120%;width:auto;text-align:center;">Ver más cursos</a> </span> </td> 
                                 </tr> 
                                 <tr style="border-collapse:collapse;"> 
                                  <td align="left" style="padding:0;Margin:0;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:150%;color:#666666;">Saludos cordiales del equipo de VMB Formación.</p> </td> 
                                 </tr> 
                               </table> </td> 
                             </tr> 
                           </table> </td> 
                         </tr> 
                         <tr style="border-collapse:collapse;"> 
                          <td align="left" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:40px;padding-right:40px;"> 
                           <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                             <tr style="border-collapse:collapse;"> 
                              <td width="520" valign="top" align="center" style="padding:0;Margin:0;"> 
                               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                                 <tr style="border-collapse:collapse;"> 
                                  <td align="center" style="padding:0;Margin:0;padding-right:5px;padding-top:20px;padding-bottom:20px;"> 
                                   <table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                                     <tr style="border-collapse:collapse;"> 
                                      <td style="padding:0;Margin:0px;border-bottom:1px solid #FFFFFF;background:rgba(0, 0, 0, 0) none repeat scroll 0% 0%;height:1px;width:100%;margin:0px;"></td> 
                                     </tr> 
                                   </table> </td> 
                                 </tr> 
                               </table> </td> 
                             </tr> 
                           </table> </td> 
                         </tr> 
                       </table> </td> 
                     </tr> 
                   </table> 
                   <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"> 
                     <tr style="border-collapse:collapse;"> 
                     </tr> 
                     <tr style="border-collapse:collapse;"> 
                      <td align="center" style="padding:0;Margin:0;"> 
                       <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#EFEFEF;" width="600" cellspacing="0" cellpadding="0" bgcolor="#efefef" align="center"> 
                         <tr style="border-collapse:collapse;"> 
                          <td align="left" style="padding:20px;Margin:0;"> 
                           <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="194"><![endif]--> 
                           <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left;"> 
                             <tr style="border-collapse:collapse;"> 
                              <td class="es-m-p0r es-m-p20b" width="174" align="center" style="padding:0;Margin:0;"> 
                               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                                 <tr style="border-collapse:collapse;"> 
                                  <td class="es-m-p0l" align="center" style="padding:0;Margin:0;padding-bottom:10px;"> <img src="https://firebasestorage.googleapis.com/v0/b/vmbformacion-3c649.appspot.com/o/image%2F13131541267384459.png?alt=media&token=112714dc-a457-451b-952d-e0a71fff77c4" alt="" width="103" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;"></td> 
                                 </tr> 
                               </table> </td> 
                              <td class="es-hidden" width="20" style="padding:0;Margin:0;"></td> 
                             </tr> 
                           </table> 
                           <!--[if mso]></td><td width="173"><![endif]--> 
                           <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left;"> 
                             <tr style="border-collapse:collapse;"> 
                              <td class="es-m-p0r es-m-p20b" width="173" align="center" style="padding:0;Margin:0;"> 
                               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                                 <tr style="border-collapse:collapse;"> 
                                  <td align="left" style="padding:0;Margin:0;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:150%;color:#333333;"><strong>VMB FORMACIÓN</strong></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:150%;color:#333333;"><br></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:150%;color:#333333;">Formación para terapeutas ocupacionales, fisioterapeutas y logopedas</p> </td> 
                                 </tr> 
                               </table> </td> 
                             </tr> 
                           </table> 
                           <!--[if mso]></td><td width="20"></td><td width="173"><![endif]--> 
                           <table class="es-right" cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right;"> 
                             <tr style="border-collapse:collapse;"> 
                              <td class="es-m-p0r es-m-p20b" width="173" align="center" style="padding:0;Margin:0;"> 
                               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                                 <tr style="border-collapse:collapse;"> 
                                  <td class="es-m-txt-с es-m-txt-l" esdev-links-color="#333333" align="left" style="padding:0;Margin:0;padding-bottom:10px;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:150%;color:#333333;"><span style="font-size:20px;line-height:150%;">660 00 00 00</span></p> </td> 
                                 </tr> 
                                 <tr style="border-collapse:collapse;"> 
                                  <td class="es-m-txt-с" esdev-links-color="#333333" align="left" style="padding:0;Margin:0;padding-bottom:10px;"> 
                                   <div style="color:#333333;"> 
                                    <span style="font-size:14px;">vmbformacion@gmail.com</span> 
                                   </div> </td> 
                                 </tr> 
                                 <tr style="border-collapse:collapse;"> 
                                  <td align="center" style="padding:0;Margin:0;"> 
                                   <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                                     <tr style="border-collapse:collapse;"> 
                                      <td valign="top" align="center" style="padding:0;Margin:0;padding-right:20px;"> <a href="https://twitter.com/VmbFormacion" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:14px;text-decoration:underline;color:#333333;"><img title="Twitter" src="https://firebasestorage.googleapis.com/v0/b/vmbformacion-3c649.appspot.com/o/image%2Ftwitter-circle-colored.png?alt=media&token=e89f3c4b-e2cf-42d5-ba23-64fe081622a1" alt="Tw" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;"></a> </td> 
                                      <td valign="top" align="center" style="padding:0;Margin:0;padding-right:20px;"> <a href="https://www.facebook.com/VMBTOFORMACION/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:14px;text-decoration:underline;color:#333333;"><img title="Facebook" src="https://firebasestorage.googleapis.com/v0/b/vmbformacion-3c649.appspot.com/o/image%2Ffacebook-circle-colored.png?alt=media&token=aa107900-be4a-416a-ab41-333a8a4f20ef" alt="Fb" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;"></a> </td> 
                                      <td valign="top" align="center" style="padding:0;Margin:0;padding-right:20px;"> <a href="https://www.linkedin.com/in/vmb-formacion-084820137/" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:14px;text-decoration:underline;color:#333333;"><img title="Linkedin" src="https://firebasestorage.googleapis.com/v0/b/vmbformacion-3c649.appspot.com/o/image%2Flinkedin-circle-colored.png?alt=media&token=a03f8d4a-4a77-4200-a4e0-26c8949ae15b" alt="In" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;"></a> </td> 
                                      <td valign="top" align="center" style="padding:0;Margin:0;"> <a href="https://www.instagram.com/vmbformacion/" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:14px;text-decoration:underline;color:#333333;"><img title="Instagram" src="https://firebasestorage.googleapis.com/v0/b/vmbformacion-3c649.appspot.com/o/image%2Finstagram-circle-colored.png?alt=media&token=728d6631-75c1-4560-bb24-2692dba0a6db" alt="Ig" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;"></a> </td> 
                                     </tr> 
                                   </table> </td> 
                                 </tr> 
                               </table> </td> 
                             </tr> 
                           </table> 
                           <!--[if mso]></td></tr></table><![endif]--> </td> 
                         </tr> 
                       </table> </td> 
                     </tr> 
                   </table> 
                   </td> 
                 </tr> 
               </table> 
              </div>  
             </body>
            </html>`
        }
    },
    contactUs: function (name, email, message, phone) {
      return {
        subject: `¡Has recibido un mensaje de ${name} a través del formulario de contacto!`,
        html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html>
        
        <head>
            <meta charset="UTF-8">
            <meta content="width=device-width, initial-scale=1" name="viewport">
            <meta name="x-apple-disable-message-reformatting">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta content="telephone=no" name="format-detection">
            <title></title>
            <!--[if (mso 16)]>
            <style type="text/css">
            a {text-decoration: none;}
            </style>
            <![endif]-->
            <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
        </head>
        
        <body>
            <div class="es-wrapper-color">
                <!--[if gte mso 9]>
              <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                <v:fill type="tile" color="#f6f6f6"></v:fill>
              </v:background>
            <![endif]-->
                <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
                    <tbody>
                        <tr>
                            <td class="esd-email-paddings" valign="top">
                                <table class="es-content esd-header-popover" cellspacing="0" cellpadding="0" align="center">
                                    <tbody>
                                        <tr>
                                            <td class="esd-stripe" align="center">
                                                <table class="es-content-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                                    <tbody>
                                                        <tr>
                                                            <td class="esd-structure es-p20t es-p20b es-p20r es-p20l" align="left">
                                                                <table width="100%" cellspacing="0" cellpadding="0">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td class="esd-container-frame" width="560" valign="top" align="center">
                                                                                <table width="100%" cellspacing="0" cellpadding="0">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td class="esd-block-text es-p15b" align="left">
                                                                                                <h2>Nuevo mensaje enviado a través del formulario de contacto</h2>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td class="esd-block-text es-p20t" align="left">
                                                                                                <p><strong>Nombre:</strong> ${name}</p>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td class="esd-block-text es-p15t" align="left">
                                                                                                <p><strong>E-mail:</strong> ${email}</p>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td class="esd-block-text es-p20t" align="left">
                                                                                                <p><strong>Número de teléfono:</strong> ${phone}</p>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td class="esd-block-text es-p20t" align="left">
                                                                                                <p><strong>Mensaje:</strong> ${message}</p>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </body>
        
        </html>`
      }
    }
}

module.exports = mailTemplates