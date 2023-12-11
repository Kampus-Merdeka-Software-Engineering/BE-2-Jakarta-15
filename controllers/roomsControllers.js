import express, { request, response } from "express";
import { createRoom, getAllRooms } from "../services/roomsServices.js";

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