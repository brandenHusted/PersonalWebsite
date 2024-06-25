
function footer(){
    // uses <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> from index.html
    document.write(`\
        <div id="footer-box">\
        \
            <div id="footer">\
                <div id="footer-infos">\
                    <div>\
                        <h2>Branden</h2>\
                        <p>\
                           <br>\
                            Husted<br>\
                            
                        </p>\
                    </div>\
                    <div id="footer-icons">\
                      
                     </br>
                        <a href="https://github.com/brandenHusted" target="_blank" class="fa fa-github"></a>\
                    
                        <a href="https://www.linkedin.com/in/branden-husted-6901aa211/" target="_blank" class="fa fa-linkedin"></a>\
                    
                        <a href="https://www.instagram.com/brandenhusted21/" target="_blank" class="fa fa-instagram"></a>\

                        
                        <button onclick="window.location.href='mailto:statefan1324@gmail.com'">Send me an email</button>
        
                      
                    </div>\
                    
                      
                    </div>\
                </div>\
        \
                <div id="footer-date">\
                    <p>${new Date().getFullYear()}</p>\
                </div>\
            </div>\
        \
        </div>\
    `);
}
