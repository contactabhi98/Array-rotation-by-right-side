function rotateArray(arr) {
    console.log("Original Array: ", arr);
    let shift_count = 2;
    while (shift_count) {
        let temp = arr[arr.length - 1];
        for (let i = arr.length - 1; i >= 1; i--) {
            arr[i] = arr[i - 1];
        }

        arr[0] = temp;
        shift_count--;
    }

    return arr;
}

// Example usage
const myArray = [1, 2, 3, 4, 5];
const rotatedArray = rotateArray(myArray);
console.log("Rotated Array in a right side direction by 2:", rotatedArray);
