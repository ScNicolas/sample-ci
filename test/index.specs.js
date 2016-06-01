var request = require('supertest');
var api = require('../index');

describe('contacts',function(){
	describe('GET /api/contacts',function(){
		it('should return 200',function(){
			return request(api)
			.get('/api/contacts')
			.send()
			.expect(200)
		});
	});
	
	describe('POST /api/contacts/:name',function(){
		it('should create a new contact',function(){
			return request(api)
			.post('/api/contacts/foo')
			.send()
			.expect(200)
		});
		it('should not be authorized to create a new contact with an already ',function(){
			return request(api)
			.post('/api/contacts/exist')
			.send()
			.expect(403)
		});
	});
	describe('PUT /api/contacts/:name/:new',function(){
		it('should cupdtae contact with same name',function(){
			return request(api)
			.put('/api/contacts/foo/bar')
			.send()
			.expect(200)
		});
	});
	describe('DELETE /api/contacts/:name',function(){
		it('should remove a new contact',function(){
			return request(api)
			.delete('/api/contacts/foo')
			.send()
			.expect(200)
		});
	});
	

});