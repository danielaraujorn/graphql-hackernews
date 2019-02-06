const postedBy = (parent, args, context) =>
  context.prisma.link({ id: parent.id }).postedBy();
const votes = (parent, args, context) =>
  context.prisma.link({ id: parent.id }).votes();
const countVotes = (parent, args, context) =>
  context.prisma
    .votesConnection({ where: { link: { id: parent.id } } })
    .aggregate()
    .count();
module.exports = {
  postedBy,
  votes,
  countVotes
};
