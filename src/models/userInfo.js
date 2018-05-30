const _export = (sequelize,DataTypes)=>{
  const userInfo = sequelize.define('userInfo', {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    account: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    }
  }, {
        tableName: 'user_info',
		timestamps: false,
    classMethods: {
      associate: function(models) {
        userInfo.hasOne(models.userLogin, {as: 'userLogin', foreignKey : 'uuid'});
      }
    }
    }
    );
  return userInfo;
}


export default _export;