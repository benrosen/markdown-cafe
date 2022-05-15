import { db } from 'src/lib/db'
import type {
  QueryResolvers,
  MutationResolvers,
  FlagResolvers,
} from 'types/graphql'

export const flags: QueryResolvers['flags'] = () => {
  return db.flag.findMany()
}

export const flag: QueryResolvers['flag'] = ({ id }) => {
  return db.flag.findUnique({
    where: { id },
  })
}

export const createFlag: MutationResolvers['createFlag'] = ({ input }) => {
  return db.flag.create({
    data: input,
  })
}

export const updateFlag: MutationResolvers['updateFlag'] = ({ id, input }) => {
  return db.flag.update({
    data: input,
    where: { id },
  })
}

export const deleteFlag: MutationResolvers['deleteFlag'] = ({ id }) => {
  return db.flag.delete({
    where: { id },
  })
}

export const Flag: FlagResolvers = {
  page: (_obj, { root }) =>
    db.flag.findUnique({ where: { id: root.id } }).page(),
}
