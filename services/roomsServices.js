import Rooms from "../models/rooms.js";

export const getRoomById = async (roomId) => {
    return await Rooms.findOne({
        where: { id: roomId },
    });
};

export const getAllRooms = async () => {
    return await Rooms.findAll();
}

export const createRoom = async (name, image,price, area, guest, bed, balcony, description) => {
    return await Rooms.create({ name, image, price, area, guest, bed, balcony, description });
};