'use client';
import { ListGroup } from 'react-bootstrap';
import { Note } from '../../generated/prisma/client';

/* Renders a single Note. See list/page.tsx. */
const NoteItem = ({ note }: {note: Note}) => (
   <ListGroup.Item>
    <p className="fw-lighter">{note.createdAt.toLocaleDateString('en-US')}</p>
    <p>{note.note}</p>
  </ListGroup.Item>
);

export default NoteItem;
