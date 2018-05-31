const _export = (sequelize,DataTypes)=>{
  const userLogin = sequelize.define('userLogin', {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    user_uuid: {
      type: DataTypes.STRING
    },
    hash_pw: {
      type: DataTypes.STRING
    }
  }, {
        tableName: 'user_login',
		timestamps: false
    }
    );
  userLogin.associate = function(model) {
    userLogin.belongsTo(model.userInfo, {
      as: 'userInfo',
      foreignKey: 'user_uuid'
    });
  };
  return userLogin;
}


export default _export;