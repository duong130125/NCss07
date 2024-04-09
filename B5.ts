let anyVariable: any;

anyVariable = 10;     
console.log(anyVariable.toFixed(2));  // Không có lỗi, vì anyVariable có thể là number

anyVariable = "Hello";  
console.log(anyVariable.toUpperCase()); // Không có lỗi, vì anyVariable có thể là string

let unknownVariable: unknown;

unknownVariable= 10;  
// console.log(unknownVariable.toFixed(2));  // Lỗi: Property 'toFixed' does not exist on type 'unknown'.

unknownVariable = "Hello"; 
// console.log(unknownVariable.toUpperCase()); // Lỗi: Property 'toUpperCase' does not exist on type 'unknown'.

if (typeof unknownVariable == "number") {
    console.log(unknownVariable.toFixed(2));  
}

if (typeof unknownVariable == "string") {
    console.log(unknownVariable.toUpperCase()); 
}

// kiểu dữ liệu 'any' cho phép gán bất kỳ giá trị nào cho nó và truy cập vào bất kỳ thuộc tính hoặc phương thức nào mà không gây ra lỗi kiểm tra kiểu dữ liệu.

// kiểu dữ liệu 'unknown' không cho phép truy cập trực tiếp vào các thuộc tính hoặc phương thức của nó. Cần kiểm tra hoặc ép kiểu thành một kiểu dữ liệu cụ thể trước khi sử dụng.