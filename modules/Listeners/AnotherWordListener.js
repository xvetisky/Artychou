class AnotherWordListener {
    constructor(client) {
        this.client = client;
    }

    async doAsync(message) {
        const str = message.content;
        const channel = message.channel;
        if(/[(x00-xF7)|(\:\()]+\./gm.test(str)) {
            console.log('true');
            const content = str.slice(0, str.length - 1).split(/\s/);
            const logical = content.every(e => e === content[0]);
            let first = null;
            let array = []; //NO DOUBT
            let firstArray = []; // NO DOUBT
            let oFirst = null; // NO
            for(let i=0; i<content.length; i++){
                let current = content[i]; // DOUBT
                if(oFirst === null) {
                    oFirst = current;
                    array.push(current);
                    continue;
                }
                if(current === oFirst) {
                    firstArray.push(array.join(' '));
                    array = [];
                    array.push(current);
                    continue;
                }
                array.push(current);
                if(i === content.length -1) firstArray.push(array.join(' '));
            }
            if(logical && content.length > 1) {
                first = content[0];
                if (content.every(element => element === first)) await channel.send(`${content.join(' ')} ${first}.`);
                return;
            }
            first = firstArray[0];
            if(firstArray.length > 1) {
                if (firstArray.every(element => element === first)) await channel.send(`${content.join(' ')} ${first}.`);
            }
        }
    }

}


module.exports = AnotherWordListener;