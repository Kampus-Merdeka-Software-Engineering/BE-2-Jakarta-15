import express from "express";
import { createRoom, getAllRooms, getRoomById } from "../services/roomsServices.js";


/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
export const getRoomItem = async (request, response) => {
    const id = request.params.id;
    const room = await getRoomById(id);

    if(room === null) {
        return response.status(404).json({
            message: "Data Not Found",
        });
    }

    response.json({
        data: room,
    });
};

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */

export const getRoomList = async (request, response) => {
    const roomList = await getAllRooms();
    response.json({
        data: roomList,
    });
};

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */

export const postCreateRoom = async (request, response) => {
    const { name, price, area, guest, bed, balcony, description } = request.body;

    const room = await createRoom(name, image, price, area, guest, bed, balcony, description);

    response.json({
        data: room,
    });
};