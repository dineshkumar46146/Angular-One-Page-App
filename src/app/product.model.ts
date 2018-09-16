export class Product {
    name: string;
    code: string;
    description: string;
    imgUrl: string;
    constructor(args: {
        name?: string,
        code?: string,
        description?: string,
        imgUrl?: string
    } = {}) {
        this.name = args.name;
        this.code = args.code;
        this.description = args.description;
        this.imgUrl =args.imgUrl;
    }
}
