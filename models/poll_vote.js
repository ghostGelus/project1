module.exports = (sequelize, DataTypes) => {
	let Sequelize = sequelize.Sequelize

	let PollVote = sequelize.define('PollVote', {}, {
		
	})
	PollVote.associate = function(models) {
    // associations can be defined here
		PollVote.belongsTo(models.PollAnswer)
		PollVote.belongsTo(models.PollQuestion)
		PollVote.belongsTo(models.User)
  }

	return PollVote
}
