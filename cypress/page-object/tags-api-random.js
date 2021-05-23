const https = require('https');

export class TagsRandomData{
    constructor(path, url=true){
        this.url = url;
        this.path = path;
        this.json = {};
    }

    async requireData(){
        if(this.url) this.json = await this.api();
        else this.json = await cy.readFile(this.path);
    }

    async api(){
        return new Promise(async (resolve, reject) => {
            await https.get(this.path,(res) => {
                let body = "";
            
                res.on("data", (chunk) => {
                    body += chunk;
                });
            
                res.on("end", () => {
                    try {
                        resolve(JSON.parse(body));
                    } catch (error) {
                        console.error(error.message);
                    };
                });
            
            }).on("error", (error) => {
                reject(error);
            });
        });
    }

    get(value){
        return this.json[value];
    }
}



