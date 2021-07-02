import { guests } from "../../../data/guests";

export default function handler(req, res) {
  const { id } = req.query;
  const guest = guests.find(guest => guest.id == id);

  res.status(200).json(guest);
}