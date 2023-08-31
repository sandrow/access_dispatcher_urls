/////////////////////////////////////////////////////////////////////////////////
//This is to automate accessing the dispatcher URLs for data refreshes (JavaScript)
//This is to be ran as a browser snippet

const previewIP = 'XX.XX.XX.XX';
const prodIP = ['XX.XX.XX.XX', 'XX.XX.XX.XX', 'XX.XX.XX.XX', 'XX.XX.XX.XX'];

let env = prompt('Please enter the Environment');
let brand = prompt('Please enter the Brand');
let year = prompt('Please enter the Year');
let trim = prompt('Please enter the Trim');


function isProd () {
    (env === "prod") ? openProdTabs(env,brand,year,trim) : openPreviewTabs("preview",brand,year,trim);
}

isProd();

function openProdTabs (env,brand,year,trim = null) {

    for(let i = 0; i < prodIP.length; i++){
        if(!trim)
            window.open(`https://${prodIP[i]}/reference.the.documentation.${env}.${brand}.js?refresh=true`) && 
            window.open(`https://${prodIP[i]}/reference.the.documentation.${env}.${brand}.${year}.js?refresh=true`);
        else 
            window.open(`https://${prodIP[i]}/reference.the.documentation.${env}.${brand}.js?refresh=true`) &&
            window.open(`https://${prodIP[i]}/reference.the.documentation.${env}.${brand}.${year}.js?refresh=true`) &&
            window.open(`https://${prodIP[i]}/reference.the.documentation.${env}.${brand}.${year}.${trim}.js?refresh=true`);
    }

    window.open(`https://www.${brand}.com/reference.the.documentation.js`);
    
}

function openPreviewTabs (env,brand,year,trim = null) {

        if(!trim) {
            window.open(`https://${previewIP}/reference.the.documentation.${env}.${brand}.js?refresh=true`) && 
            window.open(`https://${previewIP}/reference.the.documentation.${env}.${brand}.${year}.js?refresh=true`) &&
            window.open(`https://${previewIP}/reference.the.documentation.prod.${brand}.js?refresh=true`) && 
            window.open(`https://${previewIP}/reference.the.documentation.prod.${brand}.${year}.js?refresh=true`);
        }
            
        else {
            window.open(`https://${previewIP}/reference.the.documentation.${env}.${brand}.js?refresh=true`) &&
            window.open(`https://${previewIP}/reference.the.documentation.${env}.${brand}.${year}.js?refresh=true`) &&
            window.open(`https://${previewIP}/reference.the.documentation.${env}.${brand}.${year}.${trim}.js?refresh=true`) &&
            window.open(`https://${previewIP}/reference.the.documentation.prod.${brand}.js?refresh=true`) &&
            window.open(`https://${previewIP}/reference.the.documentation.prod.${brand}.${year}.js?refresh=true`) &&
            window.open(`https://${previewIP}/reference.the.documentation.prod.${brand}.${year}.${trim}.js?refresh=true`);
        }

    window.open(`https://www-${env}.${brand}.com/reference.the.documentation.js`);
    
}


// TASK: fix the format so that the year can only take a number (maybe use Typeof?)
// Change any "-" in to "_"
// Make all copy lowercase
// 4xe specific formatting

