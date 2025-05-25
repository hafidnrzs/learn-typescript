enum Direction {
    North,
    East,
    South,
    West,
}

console.log("\nNumeric Enum examples:");
console.log(`Direction.North: ${Direction.North}`);
console.log(`Direction.South: ${Direction.South}`);

enum StatusCode {
    Success = 200,
    Created = 201,
    BadRequest = 400,
    NotFound = 404,
}

console.log(`Status code for Success: ${StatusCode.Success}`);
console.log(`Status code for Not Found: ${StatusCode.NotFound}`);

// Memanfaatkan enum dalam fungsi
function handleResponse(status: StatusCode | number) {
    if (status === StatusCode.Success)
        console.log("Response handled successfully.");
    else if (status === StatusCode.NotFound) console.log("Resource not found.");
    else console.log("Unknown status.");
}

handleResponse(StatusCode.Success);
handleResponse(StatusCode.NotFound);
handleResponse(500);

//  String Enum example
enum OrderStatus {
    Pending = "PENDING",
    Processing = "PROCESSING",
    Shipped = "SHIPPED",
    Delivered = "DELIVERED",
    Cancelled = "CANCELLED",
}

console.log("\nString Enum examples:");
console.log(`Current Order Status: ${OrderStatus.Pending}`);
console.log(`Current Order Status: ${OrderStatus.Delivered}`);

// Memanfaatkan string enum dalam fungsi
function displayOrderStatus(status: OrderStatus | string) {
    switch (status) {
        case OrderStatus.Pending:
            console.log("Your order is awaiting confirmation.");
            break;
        case OrderStatus.Delivered:
            console.log("Your order has been successfully delivered!");
            break;
        default:
            console.log(`Order status: ${status}`);
    }
}

displayOrderStatus(OrderStatus.Processing);
displayOrderStatus(OrderStatus.Delivered);
