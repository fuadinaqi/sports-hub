function sendEmail(person,agenda) {

return  `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head>
      <!--[if gte mso 9]><xml>
       <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
       </o:OfficeDocumentSettings>
      </xml><![endif]-->
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width">
      <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
      <title></title>
      <!--[if !mso]><!-- -->
  	<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">
  	<!--<![endif]-->

      <style type="text/css" id="media-query">
        body {
    margin: 0;
    padding: 0; }

  table, tr, td {
    vertical-align: top;
    border-collapse: collapse; }

  .ie-browser table, .mso-container table {
    table-layout: fixed; }

  * {
    line-height: inherit; }

  a[x-apple-data-detectors=true] {
    color: inherit !important;
    text-decoration: none !important; }

  [owa] .img-container div, [owa] .img-container button {
    display: block !important; }

  [owa] .fullwidth button {
    width: 100% !important; }

  [owa] .block-grid .col {
    display: table-cell;
    float: none !important;
    vertical-align: top; }

  .ie-browser .num12, .ie-browser .block-grid, [owa] .num12, [owa] .block-grid {
    width: 480px !important; }

  .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {
    line-height: 100%; }

  .ie-browser .mixed-two-up .num4, [owa] .mixed-two-up .num4 {
    width: 160px !important; }

  .ie-browser .mixed-two-up .num8, [owa] .mixed-two-up .num8 {
    width: 320px !important; }

  .ie-browser .block-grid.two-up .col, [owa] .block-grid.two-up .col {
    width: 240px !important; }

  .ie-browser .block-grid.three-up .col, [owa] .block-grid.three-up .col {
    width: 160px !important; }

  .ie-browser .block-grid.four-up .col, [owa] .block-grid.four-up .col {
    width: 120px !important; }

  .ie-browser .block-grid.five-up .col, [owa] .block-grid.five-up .col {
    width: 96px !important; }

  .ie-browser .block-grid.six-up .col, [owa] .block-grid.six-up .col {
    width: 80px !important; }

  .ie-browser .block-grid.seven-up .col, [owa] .block-grid.seven-up .col {
    width: 68px !important; }

  .ie-browser .block-grid.eight-up .col, [owa] .block-grid.eight-up .col {
    width: 60px !important; }

  .ie-browser .block-grid.nine-up .col, [owa] .block-grid.nine-up .col {
    width: 53px !important; }

  .ie-browser .block-grid.ten-up .col, [owa] .block-grid.ten-up .col {
    width: 48px !important; }

  .ie-browser .block-grid.eleven-up .col, [owa] .block-grid.eleven-up .col {
    width: 43px !important; }

  .ie-browser .block-grid.twelve-up .col, [owa] .block-grid.twelve-up .col {
    width: 40px !important; }

  @media only screen and (min-width: 500px) {
    .block-grid {
      width: 480px !important; }
    .block-grid .col {
      vertical-align: top; }
      .block-grid .col.num12 {
        width: 480px !important; }
    .block-grid.mixed-two-up .col.num4 {
      width: 160px !important; }
    .block-grid.mixed-two-up .col.num8 {
      width: 320px !important; }
    .block-grid.two-up .col {
      width: 240px !important; }
    .block-grid.three-up .col {
      width: 160px !important; }
    .block-grid.four-up .col {
      width: 120px !important; }
    .block-grid.five-up .col {
      width: 96px !important; }
    .block-grid.six-up .col {
      width: 80px !important; }
    .block-grid.seven-up .col {
      width: 68px !important; }
    .block-grid.eight-up .col {
      width: 60px !important; }
    .block-grid.nine-up .col {
      width: 53px !important; }
    .block-grid.ten-up .col {
      width: 48px !important; }
    .block-grid.eleven-up .col {
      width: 43px !important; }
    .block-grid.twelve-up .col {
      width: 40px !important; } }

  @media (max-width: 500px) {
    .block-grid, .col {
      min-width: 320px !important;
      max-width: 100% !important;
      display: block !important; }
    .block-grid {
      width: calc(100% - 40px) !important; }
    .col {
      width: 100% !important; }
      .col > div {
        margin: 0 auto; }
    img.fullwidth, img.fullwidthOnMobile {
      max-width: 100% !important; }
    .no-stack .col {
      min-width: 0 !important;
      display: table-cell !important; }
    .no-stack.two-up .col {
      width: 50% !important; }
    .no-stack.mixed-two-up .col.num4 {
      width: 33% !important; }
    .no-stack.mixed-two-up .col.num8 {
      width: 66% !important; }
    .no-stack.three-up .col.num4 {
      width: 33% !important; }
    .no-stack.four-up .col.num3 {
      width: 25% !important; }
    .mobile_hide {
      min-height: 0px;
      max-height: 0px;
      max-width: 0px;
      display: none;
      overflow: hidden;
      font-size: 0px; } }

      </style>
  </head>
  <body class="clean-body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #FFFFFF">
    <style type="text/css" id="media-query-bodytag">
      @media (max-width: 520px) {
        .block-grid {
          min-width: 320px!important;
          max-width: 100%!important;
          width: 100%!important;
          display: block!important;
        }

        .col {
          min-width: 320px!important;
          max-width: 100%!important;
          width: 100%!important;
          display: block!important;
        }

          .col > div {
            margin: 0 auto;
          }

        img.fullwidth {
          max-width: 100%!important;
        }
  			img.fullwidthOnMobile {
          max-width: 100%!important;
        }
        .no-stack .col {
  				min-width: 0!important;
  				display: table-cell!important;
  			}
  			.no-stack.two-up .col {
  				width: 50%!important;
  			}
  			.no-stack.mixed-two-up .col.num4 {
  				width: 33%!important;
  			}
  			.no-stack.mixed-two-up .col.num8 {
  				width: 66%!important;
  			}
  			.no-stack.three-up .col.num4 {
  				width: 33%!important;
  			}
  			.no-stack.four-up .col.num3 {
  				width: 25%!important;
  			}
        .mobile_hide {
          min-height: 0px!important;
          max-height: 0px!important;
          max-width: 0px!important;
          display: none!important;
          overflow: hidden!important;
          font-size: 0px!important;
        }
      }
    </style>
    <!--[if IE]><div class="ie-browser"><![endif]-->
    <!--[if mso]><div class="mso-container"><![endif]-->
    <table class="nl-container" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #FFFFFF;width: 100%" cellpadding="0" cellspacing="0">
  	<tbody>
  	<tr style="vertical-align: top">
  		<td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #FFFFFF;"><![endif]-->

      <div style="background-image:url('https://images.pexels.com/photos/7432/pexels-photo.jpg?w=1260&amp;h=750&amp;auto=compress&amp;cs=tinysrgb');background-position:top left;background-repeat:no-repeat;;background-color:transparent">
        <div style="Margin: 0 auto;min-width: 320px;max-width: 480px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;" class="block-grid ">
          <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-image:url('https://images.pexels.com/photos/7432/pexels-photo.jpg?w=1260&h=750&auto=compress&cs=tinysrgb');background-position:top left;background-repeat:no-repeat;;background-color:transparent" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 480px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->

                <!--[if (mso)|(IE)]><td align="center" width="480" style=" width:480px; padding-right: 60px; padding-left: 60px; padding-top:60px; padding-bottom:60px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
              <div class="col num12" style="min-width: 320px;max-width: 480px;display: table-cell;vertical-align: top;">
                <div style="background-color: transparent; width: 100% !important;">
                <!--[if (!mso)&(!IE)]><!--><div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:60px; padding-bottom:60px; padding-right: 60px; padding-left: 60px;"><!--<![endif]-->


                      <div class="">
  	<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top: 30px; padding-bottom: 25px;"><![endif]-->
  	<div style="font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;line-height:120%;color:#333333; padding-right: 0px; padding-left: 0px; padding-top: 30px; padding-bottom: 25px;">
  		<div style="line-height:14px;font-family:Lato, Tahoma, Verdana, Segoe, sans-serif;font-size:12px;color:#333333;text-align:left;"><p style="margin: 0;font-size: 14px;line-height: 17px">&#160;<br></p><p style="margin: 0;font-size: 14px;line-height: 17px;text-align: right"><span style="font-size: 26px; line-height: 31px;">Hi, ${person.name} </span></p><p style="margin: 0;font-size: 14px;line-height: 17px;text-align: right"><span style="font-size: 26px; line-height: 31px;">Your joined event is already full booked</span></p><p style="margin: 0;line-height: 14px;font-size: 12px;text-align: right"><span style="font-size: 26px; line-height: 31px;">Please come to the event place as scheduled</span></p></div>	
  	</div>
  	<!--[if mso]></td></tr></table><![endif]-->
  </div>

                <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
                </div>
              </div>
            <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
          </div>
        </div>
      </div>    <div style="background-color:#18694B;">
        <div style="Margin: 0 auto;min-width: 320px;max-width: 480px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;" class="block-grid ">
          <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:#18694B;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 480px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->

                <!--[if (mso)|(IE)]><td align="center" width="480" style=" width:480px; padding-right: 0px; padding-left: 0px; padding-top:30px; padding-bottom:30px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
              <div class="col num12" style="min-width: 320px;max-width: 480px;display: table-cell;vertical-align: top;">
                <div style="background-color: transparent; width: 100% !important;">
                <!--[if (!mso)&(!IE)]><!--><div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:30px; padding-bottom:30px; padding-right: 0px; padding-left: 0px;"><!--<![endif]-->


                      <div class="">
  	<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 25px; padding-bottom: 10px;"><![endif]-->
  	<div style="font-family:Tahoma, Verdana, Segoe, sans-serif;line-height:120%;color:#333333; padding-right: 10px; padding-left: 10px; padding-top: 25px; padding-bottom: 10px;">
  		<div style="font-size:12px;line-height:14px;font-family:Tahoma, Verdana, Segoe, sans-serif;color:#333333;text-align:left;"><p style="margin: 0;font-size: 12px;line-height: 14px;text-align: center"><span style="font-size: 24px; line-height: 28px; color: rgb(255, 255, 255);">STAY HAPPY AND HEALTHY!!</span></p></div>
  	</div>
  	<!--[if mso]></td></tr></table><![endif]-->
  </div>


                      <div class="">
  	<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 0px; padding-bottom: 10px;"><![endif]-->
  	<div style="font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;line-height:150%;color:#A5A5A6; padding-right: 10px; padding-left: 10px; padding-top: 0px; padding-bottom: 10px;">
  		<div style="font-size:12px;line-height:18px;color:#A5A5A6;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;text-align:left;"><p style="margin: 0;font-size: 14px;line-height: 21px;text-align: center"><br></p></div>
  	</div>
  	<!--[if mso]></td></tr></table><![endif]-->
  </div>



  <table border="0" cellpadding="0" cellspacing="0" width="100%" class="divider " style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 100%;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
      <tbody>
          <tr style="vertical-align: top">
              <td class="divider_inner" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right: 10px;padding-left: 10px;padding-top: 10px;padding-bottom: 10px;min-width: 100%;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                  <table class="divider_content" height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 0px solid transparent;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                      <tbody>
                          <tr style="vertical-align: top">
                              <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                  <span>&#160;</span>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </td>
          </tr>
      </tbody>
  </table>

                <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
                </div>
              </div>
            <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
          </div>
        </div>
      </div>    <div style="background-color:#ffffff;">
        <div style="Margin: 0 auto;min-width: 320px;max-width: 480px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;" class="block-grid ">
          <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:#ffffff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 480px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->

                <!--[if (mso)|(IE)]><td align="center" width="480" style=" width:480px; padding-right: 0px; padding-left: 0px; padding-top:30px; padding-bottom:30px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
              <div class="col num12" style="min-width: 320px;max-width: 480px;display: table-cell;vertical-align: top;">
                <div style="background-color: transparent; width: 100% !important;">
                <!--[if (!mso)&(!IE)]><!--><div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:30px; padding-bottom:30px; padding-right: 0px; padding-left: 0px;"><!--<![endif]-->



  <div align="center" style="padding-right: 10px; padding-left: 10px; padding-bottom: 10px;" class="">
    <div style="line-height:10px;font-size:1px">&#160;</div>
    <div style="display: table; max-width:151px;">
    <!--[if (mso)|(IE)]><table width="131" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse; padding-right: 10px; padding-left: 10px; padding-bottom: 10px;"  align="center"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:131px;"><tr><td width="32" style="width:32px; padding-right: 5px;" valign="top"><![endif]-->
      <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;Margin-right: 5px">
        <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
          <a href="https://www.facebook.com/sports-hub" title="Facebook" target="_blank">
            <img src="images/facebook.png" alt="Facebook" title="Facebook" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
          </a>
        <div style="line-height:5px;font-size:1px">&#160;</div>
        </td></tr>
      </tbody></table>
        <!--[if (mso)|(IE)]></td><td width="32" style="width:32px; padding-right: 5px;" valign="top"><![endif]-->
      <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;Margin-right: 5px">
        <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
          <a href="http://twitter.com/sports-hub" title="Twitter" target="_blank">
            <img src="images/twitter.png" alt="Twitter" title="Twitter" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
          </a>
        <div style="line-height:5px;font-size:1px">&#160;</div>
        </td></tr>
      </tbody></table>
        <!--[if (mso)|(IE)]></td><td width="32" style="width:32px; padding-right: 0;" valign="top"><![endif]-->
      <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;Margin-right: 0">
        <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
          <a href="http://plus.google.com/sports-hub" title="Google+" target="_blank">
            <img src="images/googleplus.png" alt="Google+" title="Google+" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
          </a>
        <div style="line-height:5px;font-size:1px">&#160;</div>
        </td></tr>
      </tbody></table>
      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
    </div>
  </div>


                      <div class="">
  	<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 15px; padding-bottom: 10px;"><![endif]-->
  	<div style="font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;line-height:150%;color:#959595; padding-right: 10px; padding-left: 10px; padding-top: 15px; padding-bottom: 10px;">
  		<div style="font-size:12px;line-height:18px;color:#959595;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;text-align:left;"><p style="margin: 0;font-size: 12px;line-height: 18px;text-align: center">Sports-Hub©2018</p><br></div>
  	</div>
  	<!--[if mso]></td></tr></table><![endif]-->
  </div>

                <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
                </div>
              </div>
            <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
          </div>
        </div>
      </div>   <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
  		</td>
    </tr>
    </tbody>
    </table>
    <!--[if (mso)|(IE)]></div><![endif]-->


  </body></html>`



}

module.exports = sendEmail