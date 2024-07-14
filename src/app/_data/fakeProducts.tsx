
const productArr = [{
    _id: "Regular Fit Short-sleeved Oxford",
    product_title: "women black dress",
    product_description: "Short-sleeved shirt in Oxford cotton with a button-down collar, classic front, yoke at the back, chest pocket and a rounded hem. Regular fit for comfortable wear and a classic silhouette.",
    attributes: [{
        _id: "1",
        key: "type",
        value: "dress"
    },
    {
        _id: "2",
        key: "fabric",
        value: "cotton"
    },
    {
        _id: "3",
        key: "style",
        value: "casual"
    },
    {
        _id: "4",
        key: "color",
        value: "white"
    }],
    stock_details: {
        in_stock: true,
        quantity: 10
    },
    price: {
        base_price: 119.00,
        current_price: 100.00,
        discounts: [{
            _id: "1",
            discount_id: "1",
            discount_name: "10% OFF",
            discount_description: "summer sale 🏖️",
            discount_type: "discount",
            discount_percentage: 10
        }]
    },
    catigory_details:{
        product_catigory: "men",
        product_sub_catigory: "t-shirts",
    },
    tags: ["dress", "casual", "white"],
    sizes: [{
        size: "S",
        value: "s",
        is_available: true
    },{
        size: "M",
        value: "m",
        is_available: true
    },{
        size: "L",
        value: "l",
        is_available: true
    },{
        size: "XL",
        value: "xl",
        is_available: false
    },{
        size: "XXL",
        value: "xxl",
        is_available: false
    }],
    images: [
    {
        imageUrl: "https://sa.hm.com/assets/HNM/18556040/024e2172c380fa86f77703b32c04a43459a373b6/1/024e2172c380fa86f77703b32c04a43459a373b6.jpg",
        isThumbnail: true
    },
    {
        imageUrl: "https://sa.hm.com/assets/HNM/18556040/024e2172c380fa86f77703b32c04a43459a373b6/1/024e2172c380fa86f77703b32c04a43459a373b6.jpg",
        isThumbnail: false 
    },
    {
        imageUrl: "https://sa.hm.com/assets/HNM/18556040/024e2172c380fa86f77703b32c04a43459a373b6/1/024e2172c380fa86f77703b32c04a43459a373b6.jpg",
        isThumbnail: false
    },
    {
        imageUrl: "https://sa.hm.com/assets/HNM/18556040/024e2172c380fa86f77703b32c04a43459a373b6/1/024e2172c380fa86f77703b32c04a43459a373b6.jpg",
        isThumbnail: false
    },
    {
        imageUrl: "https://sa.hm.com/assets/HNM/18556040/024e2172c380fa86f77703b32c04a43459a373b6/1/024e2172c380fa86f77703b32c04a43459a373b6.jpg",
        isThumbnail: false
    },
    {
        imageUrl: "https://sa.hm.com/assets/HNM/18556040/024e2172c380fa86f77703b32c04a43459a373b6/1/024e2172c380fa86f77703b32c04a43459a373b6.jpg",
        isThumbnail: false
    }],
    rating: {
        total_rating: 10,
        rating_count: 50,
        average_rating: 5
    },
    comments: [{
        user_id: '3132411312',
        rating: 4.5,
        comment: 'good product',
        date: new Date()
    }]
}]



const products = Array.from({ length: 8 }, (_, index) => {
    const newProduct = { ...productArr[0] };
    newProduct._id = `product_${index + 1}`;
    newProduct.product_title += ` ${index + 1}`;
    return newProduct;
});

export default products