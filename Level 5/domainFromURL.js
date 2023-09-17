// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
    //your code here

    const matches=url.split("\/\/").join("\.").split("\.")

    for(const part of matches){
        if((part!=="http:")&&(part!=="https:")&&(part!=="www")){
            return part
        }
    }

  }

  console.log(domainName('http://x0o6yx657gl-lm31yi-0l1bfs27.it/warez/'))

//   Alt Solutions
//   #1
//   function domainName(url){
//     url = url.replace("https://", '');
//     url = url.replace("http://", '');
//     url = url.replace("www.", '');
//     return url.split('.')[0];
//   };

//   #2
//   function domainName(url){
//     return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
//   }