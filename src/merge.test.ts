import { merge } from './merge';

describe("result should return as a sorted array of number ascending.", ()=> {

    it("should return a sorted array of number ascending", ()=>{
        // Arrange
        const collection_1: number[] = [0, 1, 2, 3];
        const collection_2: number[] = [11, 10 ,9, 8];
        const collection_3: number[] = [4, 5, 6, 7];

        // Act
        const result = merge(collection_1, collection_2, collection_3);

        // Assert
        expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    });

    it("should return a sorted array of number ascending", ()=>{
        // Arrange
        const collection_1: number[] = [4, 7, 8, 9];
        const collection_2: number[] = [10, 5];
        const collection_3: number[] = [1, 2, 3, 6];

        // Act
        const result = merge(collection_1, collection_2, collection_3);

        // Assert
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it("should return an empty array", ()=>{
        // Arrange
        const collection_1: number[] = [];
        const collection_2: number[] = [];
        const collection_3: number[] = [];

        // Act
        const result = merge(collection_1, collection_2, collection_3);

        // Assert
        expect(result).toEqual([]);
    });

    it("should return a sorted array of number ascending", ()=>{
        // Arrange
        const collection_1: number[] = [];
        const collection_2: number[] = [9, 8, 7, 6];
        const collection_3: number[] = [2, 4];

        // Act
        const result = merge(collection_1, collection_2, collection_3);

        // Assert
        expect(result).toEqual([2, 4 ,6 ,7, 8 ,9]);
    });

    it("should return a sorted array of number ascending", ()=>{
        // Arrange
        const collection_1: number[] = [1, 2, 3];
        const collection_2: number[] = [];
        const collection_3: number[] = [5 ,6];

        // Act
        const result = merge(collection_1, collection_2, collection_3);

        // Assert
        expect(result).toEqual([1, 2, 3, 5, 6]);
    });

    it("should return a sorted array of number ascending", ()=>{
        // Arrange
        const collection_1: number[] = [1, 2, 3];
        const collection_2: number[] = [10, 9];
        const collection_3: number[] = [];

        // Act
        const result = merge(collection_1, collection_2, collection_3);

        // Assert
        expect(result).toEqual([1, 2 ,3 ,9, 10]);
    });
})