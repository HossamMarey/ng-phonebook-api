import {Entity, model, property} from '@loopback/repository';

@model()
export class Contact extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  uid?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  phone: string;

  @property({
    type: 'number',
    required: true,
  })
  img: number;


  constructor(data?: Partial<Contact>) {
    super(data);
  }
}

export interface ContactRelations {
  // describe navigational properties here
}

export type ContactWithRelations = Contact & ContactRelations;
