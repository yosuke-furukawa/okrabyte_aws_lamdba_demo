var aws = require('aws-sdk');
var s3 = new aws.S3({apiVersion: '2006-03-01'});
var okrabyte = require('okrabyte');

exports.handler = function(event, context) {
   var bucket = event.Records[0].s3.bucket.name;
   var key = event.Records[0].s3.object.key;
   s3.getObject({Bucket:bucket, Key:key},
      function(err,data) {
        if (err) {
           console.log('error getting object ' + key + ' from bucket ' + bucket + 
               '. Make sure they exist and your bucket is in the same region as this function.');
           context.done('error','error getting file'+err);
        } else {
           if (data.ContentType !== "image/png") context.done('error', 'support png only.');
           okrabyte.decodeBuffer(data.Body, function(err, data){
             if (err) context.done('error', '' + err);
             console.log(data);
             context.done(null,'');
           });
        }
      }
   );
};
