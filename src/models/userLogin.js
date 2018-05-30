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
		timestamps: false,
    classMethods: {
      associate: function(models) {
        userLogin.BelongsTo(models.userInfo);
      }
    }
    }
    );
  return userLogin;
}


export default _export;