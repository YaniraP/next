import { guests } from "../../../data/guests";

export default function handler(req, res) {
  res.status(200).json(guests);
}